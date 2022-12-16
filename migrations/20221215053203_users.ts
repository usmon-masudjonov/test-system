import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    create extension if not exists "uuid-ossp";
  `);

  await knex.raw(`
    create table users(
      id uuid primary key default uuid_generate_v4(),
      created_at timestamp not null,
      first_name varchar(32) not null,
      last_name varchar(32) not null,
      phone_number varchar(12) not null,
      username varchar(32) not null,
      password varchar(72) not null,
      is_active boolean not null default true
    );
  `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw("drop table users cascade");
}
