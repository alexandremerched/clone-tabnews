function status(request, response) {
  return response.status(200).json({ teste: "Teste" });
}

export default status;
