-- DropForeignKey
ALTER TABLE "events_users" DROP CONSTRAINT "events_users_event_id_fkey";

-- DropForeignKey
ALTER TABLE "events_users" DROP CONSTRAINT "events_users_user_id_fkey";

-- AddForeignKey
ALTER TABLE "events_users" ADD CONSTRAINT "events_users_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events_users" ADD CONSTRAINT "events_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
