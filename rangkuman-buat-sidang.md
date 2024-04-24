# gimana caranya kamu mengintegrasikan aplikasi kamu dengan database / dengan cloud / dengan prisma

ini itu buat nge integrasikan aplikasi nya dengan database, disitu provider nya itu cockroach db, tapi default cockroach db itu memakai posgresql

## ini link cockroach db nya

postgresql://wafy:kimq5WQ2bV0M2lQPmcvOug@drag-drop-8710.8nk.gcp-asia-southeast1.cockroachlabs.cloud:26257/si_input?sslmode=verify-full

# kenapa kamu memakai orm dan kenapa memilih prisma

karena orm itu bikin cepet query, gausah nge query select \* from lagi, terus saya memilih prisma karena itu sangat cocok dengan project javascript dan typescript.

# kenapa make framework dan kenapa memutuskan untuk memakai react

karena memakai framework itu bisa memudahkan kita, dan udah banyak di siapin built in - built in function yang sudah tersedia di react contohnya itu setter getter (useState)

# kenapa pake typescript, kenapa ga pake javascript aja?

karena typescript itu memudahkan kita untuk membuat aplikasi (kalo emang ngerti), kalo ada error ketauan dan itu type safety

# kenapa make git dan github

karena git dan github itu membantu kita untuk menangani deployment sampai ke tahap production, karena juga github itu menyimpan kode kita (bisa kontribusi ke project project lain dan bekerja sama juga), dan git membantu kita mempunyai versioning control sendiri

# kenapa memutuskan untuk memakai tailwind dan kenapa tidak pakai bootstrap

karena tailwind itu utility first (bisa design semaunya, seperti css biasa, cuman dia code nya lebih singkat), kalo bootstrap itu tidak bebas, ditentukan warna warna nya dan susah untuk di customize

# kenapa memutuskan untuk menunggunakan uploadthing

karena upload thing itu gampang di integrasikan dengan website berbasis next js dan react js, terus juga uploadthing itu gratis

# kenapa memutuskan untuk menggunakan clerk

karena clerk itu memudahkan kita untuk membuat authentication berbasis oauth (google provider, github provider) dengan mudah dan itu gratis, dan clerk mempunyai license
