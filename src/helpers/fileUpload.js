export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/doker55/upload";

  // crear form data como en postman para enviar la imagen a Cloudinary
  const formData = new FormData();
  // necesitamos añadirle los datos del file y el upload preset
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const res = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const cloudResp = await res.json();
      return cloudResp.secure_url;
    } else {
      throw await res.json();
    }
  } catch (error) {
    throw error;
  }
};
