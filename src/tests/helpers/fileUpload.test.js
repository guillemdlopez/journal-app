import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "doker55",
  api_key: "495317117443639",
  api_secret: "nTQjGhQciyulwmzFawg1PYr--Fc",
});

describe("Pruebas en fileUpload", () => {
  //   test("debe de cargar un archivo y devolver el url", async (done) => {
  //     const res = await fetch(
  //       "https://lawebdelacultura.com/wp-content/uploads/2018/05/76-1.jpg"
  //     );
  //     const blob = res.blob();
  //     const file = new File([blob], "foto.png");
  //     const url = await fileUpload(file);
  //     console.log(url);
  //     expect(typeof url).toBe("string");

  //     const segments = url.split("/");
  //     const imgId = segments[segments.lenght - 1].replace(".png", "");

  //     cloudinary.v2.api.delete_resources(imgId, {}, () => {
  //       done();
  //     });
  //   });

  //   test("debe de devolver un error", async () => {
  //     const file = new File([], "foto.png");
  //     const url = await fileUpload(file);
  //     expect(url).toBe(null);
  //   });

  test("should ", () => {
    console.log("hello");
  });
});
