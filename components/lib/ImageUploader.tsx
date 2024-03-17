import { UploadDropzone } from "@/utils/uploadthing";
import React from "react";
interface ImageUploadProps {
  setData: any;
}
const ImageUpload = ({ setData }: ImageUploadProps) => {
  return (
    <>
      <UploadDropzone
        endpoint="documentUploader"
        onClientUploadComplete={(res) => setData("data", res[0].url)}
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
