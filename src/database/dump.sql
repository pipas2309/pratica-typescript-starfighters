--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: fighters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.fighters (
    id integer NOT NULL,
    username text NOT NULL,
    wins integer NOT NULL,
    losses integer NOT NULL,
    draws integer NOT NULL
);


ALTER TABLE public.fighters OWNER TO postgres;

--
-- Name: fighters_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.fighters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.fighters_id_seq OWNER TO postgres;

--
-- Name: fighters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.fighters_id_seq OWNED BY public.fighters.id;


--
-- Name: fighters id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fighters ALTER COLUMN id SET DEFAULT nextval('public.fighters_id_seq'::regclass);


--
-- Data for Name: fighters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fighters (id, username, wins, losses, draws) FROM stdin;
\.


--
-- Name: fighters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.fighters_id_seq', 1, false);


--
-- Name: fighters fighters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fighters
    ADD CONSTRAINT fighters_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--