/**
 * Pop this into `server/api/ip.{ts/js}` and you will be able to
 * fetch from `/api/ip` to get a visitor's IP address.
 */
export default defineEventHandler(async (event) => {
  return {
    ip: getRequestHeader(event, "x-nf-client-connection-ip")
      ? getRequestHeader(event, "x-nf-client-connection-ip")
      : getRequestHeader(event, "x-forwarded-for"),
  }
})
