import React, {
	ChangeEvent,
	Dispatch,
	Fragment,
	SetStateAction,
	useState,
} from "react";
import { Description } from "../types/form";

const ImageUploader = ({
	description,
	setDescription,
}: {
	description: Description;
	setDescription: Dispatch<SetStateAction<Description>>;
}): JSX.Element => {
	const [imagebase, setImageBase] = useState<string>("");

	const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
		if (null !== e.target.files) {
			encodeBase64(e.target.files[0]);
		}
	};

	async function encodeBase64(file: File) {
		const reader = new FileReader();

		if (file) {
			reader.readAsDataURL(file);
			reader.onload = async () => {
				const base64 = reader.result;
				if (base64 != null) {
					if (typeof base64 === "string") {
						setDescription({ ...description, facebook: base64 });
						setImageBase(base64);
					}
				}
			};
		}
	}

	return (
		<Fragment>
			{imagebase && (
				<div className="image-container">
					<img alt="" src={imagebase} />
				</div>
			)}
			<input
				type="file"
				accept="image/*"
				multiple={false}
				onChange={handleChangeImage}
			/>
		</Fragment>
	);
};

export default ImageUploader;
