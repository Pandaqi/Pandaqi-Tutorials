import shuffle from "./shuffle"

const config = {
    blankString: "___",
    extremeNumberOfAnswersProb: 0.1,
    quizImageFolder: "quiz/",
    quizImagePrefix: "img://",
    
    // multi questions have a predefined list of answers per option, and do NOT consider the rest
    // for that reason, they also cannot be reversed
    multiQuestions: ["general", "blanks"]
}

export default class Quiz 
{
    questionNode: HTMLElement;
    answerNode: HTMLElement;
    nextQuestionNode: HTMLElement;
    questions: any[];

    constructor() 
    {
        this.questionNode = document.getElementById("quiz-question");
        this.answerNode = document.getElementById("quiz-answers");
        this.nextQuestionNode = document.getElementById("quiz-next-question");

        if(!this.questionNode) { return; }
        if(!this.answerNode) { return; }
        if(!this.nextQuestionNode) { return; }

        this.questions = [];
        this.generateQuestions();
        this.loadNextQuestion();
    }

    /* Step 1) we use QUIZ_DATA (global variable set by article) to generate all possible questions */
    generateQuestions()
    {
        // @ts-ignore
        const data = window.QUIZ_DATA;

        for(let i = 0; i < data.length; i++)
        {
            const q = structuredClone(data[i]);
            const questionType = q.type || "term";
    
            const numMeaningfulOptions = q[questionType].length;
            const isMultiQuestion = (config.multiQuestions.includes(questionType));
    
            for(let a = 0; a < numMeaningfulOptions; a++)
            {
                for(let b = 0; b < 2; b++)
                {
                    const optionsA = structuredClone(q[questionType]);
                    const optionsB = structuredClone(q.options);
    
                    const isReverse = (b == 1);
                    if(isReverse && isMultiQuestion) { continue; }
                    if(isReverse && (questionType == "images" && !q.sentence_reverse)) { continue; }
    
                    const obj = {
                        "question": "",
                        "answers": [],
                        "correct": "",
                        "class": ""
                    }
    
                    let question = "";
                    let o1 = optionsA[a];
                    let o2 = optionsB[a];
    
                    let correct = isReverse ? o1 : o2;
                    if(isMultiQuestion) { correct = o2[0]; }
    
                    if(isReverse) { o2 = this.convertImage(o2); } 
                    else { o1 = this.convertImage(o1); }
    
                    let answers = isReverse ? optionsA : optionsB;
                    if(isMultiQuestion) { answers = optionsB[a]; }
    
                    // too few options for answers? can't do this, skip
                    if(answers.length <= 1) { continue; }
    
                    let sentence = "";
                    if("sentence" in q) { sentence = q.sentence; }
                    if(isReverse && "sentence_reverse" in q) { sentence = q.sentence_reverse; }
                    const customSentenceGiven = (sentence.length > 0);
    
                    if("class" in q) {
                        obj.class = q.class;
                    }
    
                    sentence = sentence.replace("$1", "<span>" + this.convertImage(o1) + "</span>");
                    sentence = sentence.replace("$B", this.blankString);
    
                    if(questionType == "terms") 
                    {
                        question = "What does the term \"<span>" + o1 + "</span>\" mean?";
                        if(isReverse) { question = "What is the term for \"<span>" + o2 + "</span>\"?" }
                    } 
                    else if(questionType == "actions") 
                    {
                        question = "How do you \"<span>" + o1 + "</span>\"?";
                        if(isReverse) { question = "What happens when you \"<span>" + o2 + "</span>\"?"; }
                    }
                    else if(questionType == "tools")
                    {
                        question = "What do you use to \"<span>" + o1 + "</span>\"?";
                        if(isReverse) { question = "What happens when you use \"<span>" + o2 + "</span>\"?"; }
                    }
                    else if(questionType == "objects")
                    {
                        question = "What are the properties of \"<span>" + o1 + "</span>\"?";
                        if(isReverse) { question = "What has the property \"<span>" + o2 + "</span>\"?" }
                    }
                    else if(questionType == "parts")
                    {
                        question = "What is <span>" + o1 + "</span> in the sentence \"" + q.sentence + "\"?";
                        if(isReverse) { question = "What is the <span>" + o2 + "</span> in the sentence \"" + q.sentence + "\"?"; }
                    }
                    else if(questionType == "blanks")
                    {
                        question = "Fill in the blank: \"" + sentence + "\"";
                    }
                    else if(questionType == "general")
                    {
                        question = sentence;
                    }
                    else if(questionType == "images")
                    {
                        let customClass = "image-container";
                        let defSentence = "What does this image show? <span class='" + customClass + "'>" + o1 + "</span>";
                        if(isReverse) { defSentence = "Which image shows (the term) <span>" + o2 + "</span>?"; }
    
                        if(customSentenceGiven) { 
                            defSentence = sentence; 
                            
                            const imageElement = isReverse? o2 : o1;
                            defSentence += "<span class='" + customClass + "'>" + imageElement + "</span>";
                        }
    
                        question = defSentence;
                    }
    
                    obj.question = question;
    
                    let randAnswers = Math.floor(Math.random() * 2) + 3;
                    if(Math.random() <= config.extremeNumberOfAnswersProb) { randAnswers = 5; }
                    if(Math.random() <= config.extremeNumberOfAnswersProb) { randAnswers = 2; }
                    const numAnswers = Math.min(answers.length, randAnswers);
    
                    const finalAnswers = [correct];
                    answers.splice(answers.indexOf(correct), 1);
    
                    for(let ans = 0; ans < (numAnswers-1); ans++)
                    {
                        const randIndex = Math.floor(Math.random() * answers.length);
                        finalAnswers.push(answers[randIndex]);
                        answers.splice(randIndex, 1);
                    }
                    
                    shuffle(finalAnswers);
    
                    for(let ans = 0; ans < finalAnswers.length; ans++)
                    {
                        finalAnswers[ans] = this.convertImage(finalAnswers[ans]);
                    }
    
                    obj.answers = finalAnswers;
    
                    correct = this.convertImage(correct);
                    obj.correct = correct;
    
                    this.questions.push(obj);
                }
            }
        }
    
        shuffle(this.questions);
    }
    blankString(arg0: string, blankString: any): string {
        throw new Error("Method not implemented.");
    }

    // turns string url (from frontmatter) into actual image
    convertImage(val)
    {
        if(!val.includes(config.quizImagePrefix)) { return val; }
        val = val.replace(config.quizImagePrefix, "");
        val = '<img loading="lazy" decoding="async" src="' + config.quizImageFolder + val + '" />';
        return val;
    }

    /* Step 2) we actually display questions, answers and result */
    loadNextQuestion()
    {
        const noQuestionsLeft = this.questions.length <= 0
        if(noQuestionsLeft) { return; }
    
        const question = this.questions.pop();
    
        this.questionNode.innerHTML = question.question;
        this.answerNode.innerHTML = "";
        
        // display the answers (and mark the correct one)
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(let i = 0; i < question.answers.length; i++)
        {
            const answerText = question.answers[i];
            const answerLetter = letters[i];
    
            const isCorrect = (answerText == question.correct);
            
            const answer = document.createElement("div");
            answer.classList.add("quiz-answer");
    
            if(question.class != "") { answer.classList.add(question.class); }
    
            const btnCont = document.createElement("div");
            btnCont.classList.add("quiz-button-container");
    
            const btn = document.createElement("div");
            btn.classList.add("quiz-button");
            btn.setAttribute("data-correct", isCorrect + "");
            btn.innerHTML = answerLetter;
            btnCont.appendChild(btn);
    
            const txt = document.createElement("div");
            txt.classList.add("quiz-answer-text");
            txt.innerHTML = answerText;
    
            answer.appendChild(btnCont);
            answer.appendChild(txt);
            this.answerNode.appendChild(answer);
        }
    
        // add event listeners to buttons
        const quizButtons = document.getElementsByClassName("quiz-button-container");
        for(let i = 0; i < quizButtons.length; i++)
        {
            quizButtons[i].addEventListener("click", (ev) => {
                this.revealQuizResult(quizButtons);
            });
        }
    
        // remove this question from the list, so it doesn't appear again
        this.nextQuestionNode.innerHTML = '';
    }

    revealQuizResult(list)
    {
        for(let i = 0; i < list.length; i++)
        {
            const btnCont = list[i];
            const btn = btnCont.firstChild;
            if(btn.getAttribute("data-correct") == "false") {
                btn.innerHTML = "&#10008;";
                btnCont.style.borderColor = '#892a24';
            } else {
                btn.innerHTML = "&#10004;";
                btnCont.style.borderColor = '#518924';
            }
        }

        const noQuestionsLeft = this.questions.length <= 0
        if(noQuestionsLeft) { 
            this.nextQuestionNode.innerHTML = 'Out of questions!';
            return; 
        }

        const nextBtn = document.createElement("button");
        nextBtn.innerHTML = 'New question?';
        nextBtn.classList.add("masked", "big-mask", "mask-1");
        nextBtn.addEventListener("click", (ev) => {
            this.loadNextQuestion();
            this.questionNode.scrollIntoView({behavior: "smooth", block: "start"});
        })

        this.nextQuestionNode.innerHTML = '';
        this.nextQuestionNode.appendChild(nextBtn);
    }
}