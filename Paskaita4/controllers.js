export function test(req, res) {
  res.json({ message: "Veikia!" });
}

export function getPerson(req, res) {
  const id = req.params.id;
  console.log(id);

  res.json({ message: "kazkas" });
}

export function getPersonFromGroup(req, res) {
  const { personId, groupId } = req.params;

  res.json({ personId, groupId });
}
