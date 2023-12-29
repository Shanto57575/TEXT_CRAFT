import { useState } from "react";

const TextEditor = () => {
	const [textColor, setTextColor] = useState("#000");
	const [fontSize, setFontSize] = useState("15px");
	const [fontFamily, setFontFamily] = useState("Arial");
	const [content, setContent] = useState("");

	const handleTextColorChange = (e) => {
		document.execCommand("foreColor", false, e.target.value);
		setTextColor(e.target.value);
	};

	const handleFontSizeChange = (e) => {
		const newSize = e.target.value;
		document.execCommand("fontSize", false, newSize);
		setFontSize(newSize);
	};

	const handleFontFamilyChange = (e) => {
		document.execCommand("fontName", false, e.target.value);
		setFontFamily(e.target.value);
	};

	const handleContentChange = (e) => {
		setContent(e.target.innerHTML);
	};

	return (
		<div>
			<h1 className="text-center text-3xl mt-3 font-serif font-semibold text-sky-500 underline">
				Text Editor
			</h1>

			<div className="font-serif flex items-center justify-center gap-x-5 mt-3">
				<div>
					<label htmlFor="Color">Color</label> <br />
					<input
						type="color"
						value={textColor}
						onChange={handleTextColorChange}
					/>
				</div>
				<div>
					<label htmlFor="FontSize">Font Size</label> <br />
					<select value={fontSize} onChange={handleFontSizeChange}>
						{[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((size) => (
							<option key={size} value={`${size}px`}>
								{size}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="FontFamily">Font Family</label> <br />
					<select value={fontFamily} onChange={handleFontFamilyChange}>
						{[
							"Arial",
							"Courier New",
							"Helvetica",
							"Times New Roman",
							"Georgia",
							"Verdana",
							"Trebuchet MS",
							"Impact",
							"Comic Sans MS",
							"Arial Black",
						].map((family) => (
							<option key={family} value={family}>
								{family}
							</option>
						))}
					</select>
				</div>
			</div>

			<div
				contentEditable
				style={{ color: textColor, fontSize, fontFamily }}
				className="w-[500px] h-[500px] border mx-auto mt-5 p-5 shadow-sm shadow-black"
				onInput={handleContentChange}
				dangerouslySetInnerHTML={{ __html: content }}
			></div>
		</div>
	);
};

export default TextEditor;
