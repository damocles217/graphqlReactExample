import React, { Fragment, useRef, useState } from "react";
import SunEditor from "suneditor-react";
import plugins from "suneditor/src/plugins/";

import { es } from "suneditor/src/lang";
import { handleChange, handleChangeEditor } from "../hooks/post.form";
import ImageUploader from "./ImageUploader";

const PostCreate = (props): JSX.Element => {
	// eslint-disable-next-line react/prop-types
	const { createPost, data } = props;
	const cont = useRef("");
	const [description, setDescription] = useState<{
		title: string;
		description: string;
		password: string;
		facebook: string;
	}>({
		title: "",
		description: "",
		password: "",
		facebook: "",
	});

	return (
		<Fragment>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const dat = await createPost({
						variables: {
							title: description.title,
							description: description.description,
							password: description.password,
							facebook: description.facebook,
							content: cont.current,
						},
					});
					console.log(dat);
				}}
				className="form-editor"
			>
				<SunEditor
					onChange={(content) => handleChangeEditor(content, cont)}
					lang={es}
					autoFocus={true}
					setDefaultStyle={"z-index: 1 !important;"}
					setOptions={{
						height: "auto",
						width: "80%",
						plugins: plugins,
						buttonList: [
							["undo", "redo"],
							["font", "fontSize", "formatBlock"],
							["paragraphStyle", "blockquote"],
							[
								"bold",
								"underline",
								"italic",
								"strike",
								"subscript",
								"superscript",
							],
							["fontColor", "hiliteColor", "textStyle"],
							["removeFormat"],
							"/", // Line break
							["outdent", "indent"],
							["align", "horizontalRule", "list", "lineHeight"],
							["table", "link", "image", "video", "audio"],
							["fullScreen", "showBlocks", "codeView"],
							["preview", "print"],
						],
					}}
				/>
				<input
					type="text"
					value={description.title}
					name="title"
					placeholder="Titulo"
					onChange={(e) => handleChange(e, description, setDescription)}
					className="input-name"
				/>
				<input
					type="text"
					name="description"
					placeholder="Descripcion"
					value={description.description}
					onChange={(e) => handleChange(e, description, setDescription)}
					className="input-name"
				/>

				<input
					type="password"
					name="password"
					placeholder="Escriba su contraseña de admin"
					value={description.password}
					onChange={(e) => handleChange(e, description, setDescription)}
					className="input-name"
				/>

				<ImageUploader
					description={description}
					setDescription={setDescription}
				/>
				<button type="submit" className="icon-cloud_upload"></button>
			</form>
		</Fragment>
	);
};

export default PostCreate;
