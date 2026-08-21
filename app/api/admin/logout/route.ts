export async function POST(request: Request) {
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  return new Response(null, { status: 303, headers: {
    location: "/admin/login",
    "set-cookie": `hirenest_admin=; Path=/admin; HttpOnly; SameSite=Strict; Max-Age=0${secure}`,
  }});
}
