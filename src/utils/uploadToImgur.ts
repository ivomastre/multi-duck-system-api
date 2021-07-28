import setupImgur from "../config/imgurConfig"
export default async function (files: any, { title, description }) {
  const imgurClient = setupImgur()
  const imgurFiles = await Promise.all(files.map(async file => {
    const response: any = await imgurClient.upload({ image: file.path, title, description })
    return response.data.link
  }))
  return imgurFiles as any
}