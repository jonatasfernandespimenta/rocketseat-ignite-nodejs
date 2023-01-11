export async function json(req, res) {
  const buffers = []

  for await (const chunk of chunk) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null
  }

  res.setHeader('Content-type', 'application/json')
}
