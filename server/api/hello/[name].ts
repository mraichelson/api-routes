export default defineEventHandler((event) => {
  // ${event.context.params.name}
  return {
    isTrue: false,
    name: event.context.params.name,
    boop: ["things", "stuff", "hello"],
  }
})
