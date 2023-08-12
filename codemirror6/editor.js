
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

import { lineNumbers, highlightActiveLineGutter, highlightSpecialChars, highlightActiveLine, keymap } from '@codemirror/view';
import { foldGutter, indentOnInput, syntaxHighlighting, defaultHighlightStyle, bracketMatching } from '@codemirror/language';
import { history, defaultKeymap, historyKeymap } from '@codemirror/commands';
import { closeBrackets, autocompletion, completionKeymap } from '@codemirror/autocomplete';

// I built my cystom setup, because I only need half of the basic setup, but more than the minimal one
const defaultSetup = /*@__PURE__*/(() => [
  lineNumbers(),
  EditorView.lineWrapping,
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  highlightActiveLine(),
  keymap.of([
      ...defaultKeymap,
      ...historyKeymap,
      ...completionKeymap,
  ])
])();

class Editor
{
  constructor(node)
  {
    this.node = node;
    this.debounceTimer = null;
    this.debounceInterval = 450;
    this.executableLanguages = ["html", "css", "javascript"];
    this.loadSettings();
    this.prepareHTML();
    this.loadTabs();
    this.createTabButtons();
    this.queueExecution();
  }

  loadSettings()
  {
    // NOTE: CodeMirror HTML already supports mixed mode, so use that whenever I want to allow all three languages at once
    this.language = this.node.dataset.lang || "html";
    this.content = this.node.dataset.content || "";
    this.keepBase = this.node.dataset.keepbase == "true";
    this.deftab = this.node.dataset.deftab || "";
    this.noPreview = this.node.dataset.nopreview == "true"; 
  }

  prepareHTML()
  {
    this.nodeEditorContainer = this.node.getElementsByClassName("codemirror-container")[0];
    this.nodeExecutionResult = this.node.getElementsByClassName("codemirror-result")[0];
    this.nodeTabButtons = this.node.getElementsByClassName("codemirror-tabs")[0];
    if(this.noPreview) { this.nodeExecutionResult.style.display = "none"; }
  }

  loadTabs()
  {
    const tabDividerExp = /=CODETAB#([a-z0-9]+)=/gi;
    const tabDividers = this.content.match(tabDividerExp);
    const noTabs = !tabDividers || tabDividers.length <= 0;
    
    let chunks = [];
    let languages = [];

    // If no tabs/chunks, just use all our content as one tab
    if(noTabs) {
      chunks = [this.content];
      languages = [this.language];
    } else {
      // Split the text into chunks, based on CODETAB seperator text
      let curChunk = this.content;
      for(let i = 0; i < tabDividers.length; i++)
      {
        const divider = tabDividers[i];
        const splitChunks = curChunk.split(divider);
        const tabChunk = splitChunks[0];
        const tabLanguage = (divider.split("#")[1]).split("=")[0];
        curChunk = splitChunks[1];

        chunks.push(tabChunk);
        languages.push(tabLanguage);
      }

      // The first one will be empty, and the last curChunk will be left over
      chunks.push(curChunk);
      chunks.shift();
    }

    console.log(tabDividers);
    console.log(chunks);
    console.log(languages);

    // Now, chunks and languages should have the same length, and be a (content, lang) pair
    // Create editor tabs from that
    this.tabs = [];
    for(let i = 0; i < chunks.length; i++)
    {
      this.tabs.push(new EditorTab(this, chunks[i], languages[i]));
    }
  }

  createTabButtons()
  {
    const onlyOneTab = this.tabs.length <= 1;
    if(onlyOneTab) { this.nodeTabButtons.style.display = "none"; return; }

    if(this.deftab == "") { this.deftab = this.tabs[0].getLanguage(); }

    for(const tab of this.tabs)
    {
      const btn = tab.createTabButton();
      this.nodeTabButtons.appendChild(btn);

      tab.hide();
      if(tab.getLanguage() == this.deftab) { tab.show(); }
    }
  }

  switchTabTo(tabNode)
  {
    for(const tab of this.tabs)
    {
      tab.hide();
      if(tab == tabNode) { tab.show(); }
    }
  }

  queueExecution()
  {
    if(!this.shouldExecute()) { return; }
    if(this.debounceTimer) { clearTimeout(this.debounceTimer); }
    this.debounceTimer = setTimeout(() => { this.execute() }, this.debounceInterval);
  }

  execute()
  {
    const tabData = {}
    for(const tab of this.tabs)
    {
      tabData[tab.getLanguage()] = tab.getEditorContent();
    }

    const iframe = document.createElement("iframe");
    this.nodeExecutionResult.innerHTML = "";
    this.nodeExecutionResult.appendChild(iframe);

    let keepRaw = false;
    if(tabData.html)
    {
      keepRaw = tabData.html.indexOf("<body>") >= 0 || 
                tabData.html.indexOf("<head>") >= 0 || 
                tabData.html.indexOf("<html>") >= 0;
    }

    let htmlContent = "<html><head>";
    if(!this.keepBase) { htmlContent += '<base href="' + window.location.href + '">'; }
    htmlContent += "</head><body>"
    if(tabData.html) { htmlContent += tabData.html; } 
    htmlContent += "</body></html>";
    if(keepRaw) { htmlContent = tabData.html; }

    // For some reason, if I set all the HTML beforehand, parts of the page don't work as they should ...
    // So I do everything after loading it
    iframe.onload = () => {
      if(keepRaw) { return; }

      const head = iframe.contentDocument.getElementsByTagName("head")[0];
      const body = iframe.contentDocument.getElementsByTagName("body")[0];

      if(tabData.css)
      {
        const linkTag = iframe.contentDocument.createElement("link");
        linkTag.setAttribute("rel", "stylesheet");
        linkTag.setAttribute("type", "text/css");
        linkTag.href = this.getBlobURL(tabData.css, "text/css");
        head.appendChild(linkTag);
      }
      
      if(tabData.javascript)
      {
        const scriptTag = iframe.contentDocument.createElement("script");
        scriptTag.src = this.getBlobURL(tabData.javascript, "text/javascript");
        head.appendChild(scriptTag);
      }
    }

    const url = this.getBlobURL(htmlContent, "text/html")
    iframe.src = url;
  }

  shouldExecute()
  {
    if(this.noPreview) { return false; }

    const langs = this.getTabLanguages();
    let hasExecutableLang = false;
    for(const lang of this.executableLanguages)
    {
      if(!langs.includes(lang)) { continue; }
      hasExecutableLang = true;
      break;
    }

    return hasExecutableLang;
  }

  getBlobURL(code, type) 
  {
    const blob = new Blob([code], { type })
    return URL.createObjectURL(blob)
  }

  getTabLanguages() 
  {
    const arr = [];
    for(const tab of this.tabs)
    {
      arr.push(tab.getLanguage());
    }
    return arr;
  }

  getEditorContainer() { return this.nodeEditorContainer; }
}

class EditorTab
{
  constructor(environment, content = "", language = "html")
  {
    this.environment = environment;
    this.content = content.trim();
    this.language = language;

    this.createHTML();
    this.createCodeMirror();
  }

  createHTML()
  {
    const node = document.createElement("div");
    node.classList.add("codemirror-tab");
    node.dataset.lang = this.language;
    this.environment.getEditorContainer().appendChild(node);
    this.nodeContent = node;
  }

  createCodeMirror()
  {
    this.nodeContent.innerHTML = "";

    this.extensions = [defaultSetup];
    if(this.language == "javascript") { this.extensions.push(javascript()); }
    else if(this.language == "css") { this.extensions.push(css()); }
    else if(this.language == "html") { this.extensions.push(html()); }

    const executerExtension = EditorView.updateListener.of((v) => {
      if(!v.docChanged) { return; }
      this.environment.queueExecution();
    });
    this.extensions.push(executerExtension);

    const initialState = EditorState.create({
      doc: this.content,
      extensions: this.extensions,
    });

    const editor = new EditorView({
      state: initialState,
      parent: this.nodeContent,
    });

    this.editor = editor;
  }

  getLanguage() { return this.language; }
  getEditorContent() { return this.editor.state.doc.toString(); }
  hide() 
  { 
    this.tabButton.classList.remove("selected");
    this.nodeContent.style.display = "none"; 
  }
  show() 
  {
    this.tabButton.classList.add("selected"); 
    this.nodeContent.style.display = "block"; 
  }

  createTabButton()
  {
    const lang = this.getLanguage();
    const div = document.createElement("div");
    div.classList.add("tab-button");
    div.innerHTML = lang.toUpperCase();
    div.addEventListener("click", (ev) => {
      this.environment.switchTabTo(this);
    });
    this.tabButton = div;
    return div;
  }
}

const editorNodes = document.getElementsByClassName("codemirror-editor");
const CODEMIRRORS = [];
for(const editorNode of editorNodes)
{
  const e = new Editor(editorNode)
  CODEMIRRORS.push(e);
}