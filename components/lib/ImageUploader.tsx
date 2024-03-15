import { UploadDropzone } from "@/utils/uploadthing";
import React from "react";
interface ImageUploadProps {
  setImageUrl: any;
}
const ImageUpload = ({ setImageUrl }: ImageUploadProps) => {
  return (
    <>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => setImageUrl("data", res[0].url)}
        appearance={{
          container: {
            padding: "0.5rem 0",
          },
        }}
      />
    </>
  );
};

export default ImageUpload;
