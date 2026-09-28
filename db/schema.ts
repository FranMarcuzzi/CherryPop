import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const campaigns = sqliteTable('campaigns', {
  id: text('id').primaryKey(), name: text('name').notNull(), config: text('config').notNull(),
  createdAt: text('created_at').notNull(), updatedAt: text('updated_at').notNull(),
});
export const spins = sqliteTable('spins', {
  id: text('id').primaryKey(), campaignId: text('campaign_id').notNull().references(() => campaigns.id, { onDelete: 'cascade' }),
  prizeId: text('prize_id').notNull(), prizeName: text('prize_name').notNull(), createdAt: text('created_at').notNull(),
});

export const appMeta = sqliteTable('app_meta', {
  key: text('key').primaryKey(),
  value: text('value').notNull(),
});
