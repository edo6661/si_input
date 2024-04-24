// ! ini nge import dari library prisma nya, biar prisma itu jalan di client, bisa make prisma di client
import { PrismaClient } from "@prisma/client";
//  ! bikin variable global untuk diakses dimana aja, dan lu ngasih type prisma ini dengan PrismaClient
declare global {
  var prisma: PrismaClient | undefined;
}
// ! ini buat nge export prisma nya, kalo udah ada prisma nya, maka pake prisma yang udah ada, kalo belum ada, maka buat prisma baru
export const db = globalThis.prisma || new PrismaClient();
// ! ini buat nge cek kalo bukan production, maka global prisma nya di set ke db
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
