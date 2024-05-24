--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    date date NOT NULL,
    location text NOT NULL,
    ticket_value integer NOT NULL,
    creator_id integer NOT NULL
);


ALTER TABLE public.events OWNER TO postgres;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.events_id_seq OWNER TO postgres;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: events_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events_users (
    event_id integer NOT NULL,
    user_id integer NOT NULL,
    ticket_quantity integer DEFAULT 1 NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.events_users OWNER TO postgres;

--
-- Name: events_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.events_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.events_users_id_seq OWNER TO postgres;

--
-- Name: events_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.events_users_id_seq OWNED BY public.events_users.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    number text NOT NULL,
    profile_image text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Name: events_users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events_users ALTER COLUMN id SET DEFAULT nextval('public.events_users_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
a20a3cad-153a-4652-9dec-90c39d0fdeb9	0f64a28933f2e5112e25fb37228fcad4d9587c5d7d10d1581970b0e7b09cef9e	2024-05-23 23:51:56.181699-03	20240523200355_add_unique_to_email	\N	\N	2024-05-23 23:51:56.172289-03	1
c4433b61-ae8c-459a-b63e-6b996457f682	f86ab22c4e33b487069d87256defd925a604ff22d780d6b773867ea647b984e5	2024-05-23 23:51:56.183875-03	20240523200634_alter_user_table	\N	\N	2024-05-23 23:51:56.182224-03	1
42aa7d89-e767-45ca-a6ff-4a527a852aa4	c15913d3e6c382ee4afd2588d576b39e459dd6f3319a2460827ba80be7c40009	2024-05-23 23:51:56.195648-03	20240523202543_create_event_table_and_alter_user_table_to_support_event	\N	\N	2024-05-23 23:51:56.184317-03	1
04feb2f5-78e6-4ce8-b7ed-75cbd339ee73	2f27ce164b8de530b0713bff57e396a5e42a1b2177fa449c930d0b2fdf9cb294	2024-05-23 23:51:56.197673-03	20240523230521_remove_is_organizer_from_users_table	\N	\N	2024-05-23 23:51:56.19611-03	1
e87911b1-d39e-467f-9d8d-851829a195b2	6d59902b9e8636f9580981b6e4218bbff7cd00768018cf162b273d85b873a9d7	2024-05-23 23:51:56.226099-03	20240524003412_add_map_to_prisma_model	\N	\N	2024-05-23 23:51:56.198153-03	1
465b6e45-8bd7-44e3-b494-1c23ba0b6bfe	a6b7aeadec759ec201d57cd104c0981d8a5581a9d847df44da224303fcc7b7e9	2024-05-23 23:51:56.252627-03	20240524003558_adjust_naming_convention	\N	\N	2024-05-23 23:51:56.226593-03	1
59e969c1-bd00-46c4-b12b-88e1e7de46e2	fddf121e9ada7484ae639c70f976c9b73a9d6b588e06534cd9c77f95165a3c11	2024-05-23 23:51:56.262074-03	20240524013230_change_datetime_to_date_field_in_event_table	\N	\N	2024-05-23 23:51:56.253121-03	1
71b1a871-6a53-419d-ba35-e63b5164fb61	612b8025f4468654877efd692af685b84b9db902f8951ceacb7d361f6d4f7527	2024-05-23 23:51:56.264091-03	20240524023508_add_quantity_of_tickets_bought_in_user_events_table	\N	\N	2024-05-23 23:51:56.262627-03	1
9848242f-39eb-459c-ab6e-5a93bf810872	144d8a184c822e567682fb4bed1737665be37bf2a82dc8ab67a7d68d511df4f2	2024-05-23 23:51:56.271885-03	20240524024021_reassign_primary_key_from_user_event_table	\N	\N	2024-05-23 23:51:56.264576-03	1
6183cd36-6dd1-4550-a48f-159279d7f0d0	3f9f86bf2c9815a365aec7fce74c5c2ae9285aa866af9a9cc2a104c427026a7c	2024-05-24 03:08:26.840122-03	20240524060826_add_cascade_in_user_events_table	\N	\N	2024-05-24 03:08:26.834505-03	1
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.events (id, title, description, date, location, ticket_value, creator_id) FROM stdin;
3	teste	Teste teste	2026-11-25	São paulo, brazil	1000	1
7	code4tuba	code4tuba	2026-11-25	tubarão, brazil	1000	1
6	TechnoSul	TechnoSul	2026-11-25	Floripa, brazil	1000	1
5	userRave	userRave	2026-11-25	São paulo, brazil	1000	1
4	KnotFest	KnotFest	2026-11-25	São paulo, brazil	1000	1
\.


--
-- Data for Name: events_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.events_users (event_id, user_id, ticket_quantity, id) FROM stdin;
3	1	10	8
4	1	10	9
5	1	10	10
5	6	100	11
4	6	21	12
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, number, profile_image, email, password) FROM stdin;
1	alves	9988426869	https://ui-avatars.com/api/?name=John+Doe	joaor4e@gmail.com	$2b$10$LBwjfxCcbOBTHj2n1PavSO.AgxBEFAxObQXeF7JqcE2zkVVSCD8he
2	alves	9988426869	https://ui-avatars.com/api/?name=John+Doe	teste@gmail.com	$2b$10$nDM9o8xnrmdaVn7li33uReqIPZYFPwdmNWZbIniNpojmA0m8AF2bS
3	alves	9988426869	https://ui-avatars.com/api/?name=John+Doe	test1234@gmail.com	$2b$10$3VTNIy57Vm/D8kgoBuNZeO4C5ZyzjcjtV0oGWA54KEFxLU0m5kPYu
4	alves	9988426869	https://ui-avatars.com/api/?name=John+Doe	pedro@gmail.com	$2b$10$Cv4Izsw0J87wsVjG63UuZOY25gQ0ZT4Mt1mR9hjZrOd0ZPngVN0b2
5	alves	9988426869	https://ui-avatars.com/api/?name=John+Doe	testeando@gmail.com	$2b$10$saSeunIruIqEhJIlpLy4JuR4mrs5i2K3VxQEBHeldX6cmqz.RYMP6
6	pedro	9988426869	https://ui-avatars.com/api/?name=John+Doe	joaovutor@hotmail.com	$2b$10$r3n6/nb8W6NI4tAkGWSwROAv.NS4befdMEOA2V.3YFGmTREbtaLDC
\.


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.events_id_seq', 7, true);


--
-- Name: events_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.events_users_id_seq', 12, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: events_users events_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events_users
    ADD CONSTRAINT events_users_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: events events_creator_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_creator_id_fkey FOREIGN KEY (creator_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: events_users events_users_event_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events_users
    ADD CONSTRAINT events_users_event_id_fkey FOREIGN KEY (event_id) REFERENCES public.events(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: events_users events_users_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events_users
    ADD CONSTRAINT events_users_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

