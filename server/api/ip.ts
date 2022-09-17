export default defineEventHandler(async (event) => {
  const header = getRequestHeader(event, "x-forwarded-for")
  return { ip: header }
})
