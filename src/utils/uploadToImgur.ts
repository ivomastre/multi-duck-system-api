import setupImgur from "../config/imgurConfig"
export default async function (files: any) {
  const imgurClient = setupImgur()
  const imgurFiles = await Promise.all(files.map(async file => {
    const response: any = await imgurClient.upload(file.path)
    return response.data.link
  }))
  return imgurFiles as any
}