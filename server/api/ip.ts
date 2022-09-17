export default defineEventHandler(async (event) => {
  return {
    ip: getRequestHeader(event, "x-nf-client-connection-ip")
      ? getRequestHeader(event, "x-nf-client-connection-ip")
      : getRequestHeader(event, "x-forwarded-for"),
  }
})
