import { prisma } from "../lip/prisma.js";

export async function getlIST(req, res) {
  const data = await prisma.user.findMany();
  res.json(data);
}

export async function storeUser(req, res) {
  const { name, email, phone } = req.body;
  await prisma.user.create({
    data: {
      name,
      email,
      phone,
    },
  });
  res.send("data added");
}
export async function singleUser(req, res) {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(user);
}
