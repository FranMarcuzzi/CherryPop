import { env } from 'cloudflare:workers';
type C={params:Promise<{key:string}>};
export async function GET(_:Request,{params}:C){const key=(await params).key;if(!/^[0-9a-f-]{36}$/.test(key)||!env.BUCKET)return new Response('No encontrada',{status:404});const obj=await env.BUCKET.get(key);if(!obj)return new Response('No encontrada',{status:404});return new Response(obj.body,{headers:{'content-type':obj.httpMetadata?.contentType||'application/octet-stream','cache-control':'public, max-age=31536000, immutable'}})}
