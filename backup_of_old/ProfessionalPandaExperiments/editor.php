<!DOCTYPE>
<html>
	<head>
		<meta charset="utf-8">
		<title>Post Editor/Creator</title>
		<script src="editor/ckeditor.js"></script>
		<script src="editor/sample.js"></script>
		<link rel="stylesheet" href="editor/samples.css">
		<link rel="stylesheet" href="editor/neo.css">
		<style type="text/css">
		input {
			width:100%;
			padding:10px;
			margin-bottom:30px;
			font-size:26px;
			border:2px solid gray;
		}
		input[type="submit"] {
			background-color:rgba(150,150,150,0.6);
			color:#fff;
			cursor:pointer;
		}
		input[type="submit"]:hover {
			background-color:#eee;
			color:#333;
		}
		</style>
	</head>

	<body id="main" style="background-color:#333;color:#fff;">
		<div style="width:900px;margin:auto;margin-top:50px;margin-bottom:50px;">
		<form action="submitPost.php" method="POST">
			<input type="text" placeholder="TITLE..." name="title"/><br/><br/>

			<div id="editor">
				<h1>Hello world!</h1>
				<p>I'm an instance of CKEditor</p>
			</div><br/><br/>

			<input type="hidden" style="display:none;" value=" NOTHING " name="post" id="hiddenValue"/>

			Expected format: number-word-word-word. Don't use any / or # or other fancypancy stuff.
			<input type="text" placeholder="SLUR-NAME..." name="slur"/>
			Expected format: one word, first letter capitalized, is an existing broad category.
			<input type="text" placeholder="CATEGORY..." name="cat"/>
			Expected format: sentence (spaces allowed) referring to the name of the tutorial series this is a part of (optional)
			<input type="text" placeholder="SUBCATEGORY..." name="subcat"/>
			Expected format: ID of youtube video (optional)
			<input type="text" placeholder="VIDEOLINK..." name="video"/>
			Expected format: number in range 1 to 5
			<input type="text" placeholder="DIFFICULTY..." name="diff"/>
			<input type="submit" value="Upload Article!">
		</form>
		</div>
	<script>
		document.onkeypress = update;

		function update() {
			console.log("LALA");
			document.getElementById('hiddenValue').value = CKEDITOR.instances.editor.getData();
		}
		initSample();
	</script>
	</body>
</html>