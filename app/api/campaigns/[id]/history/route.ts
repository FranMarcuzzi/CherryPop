import { db,err } from '@/lib/store';
type C={params:Promise<{id:string}>};
export async function GET(_:Request,{params}:C){try{const rows=await db().prepare('SELECT id,prize_id AS prizeId,prize_name AS prizeName,created_at AS createdAt FROM spins WHERE campaign_id=? ORDER BY created_at DESC LIMIT 500').bind((await params).id).all();return Response.json(rows.results||[])}catch(e){return err(e)}}
