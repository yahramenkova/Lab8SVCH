PGDMP              
         |         	   Warehouse    16.0    16.0 #    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    41891 	   Warehouse    DATABASE     �   CREATE DATABASE "Warehouse" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Belarus.1251';
    DROP DATABASE "Warehouse";
                postgres    false            �            1259    41923    carts    TABLE        CREATE TABLE public.carts (
    cart_id integer NOT NULL,
    user_id integer,
    product_id integer,
    quantity integer
);
    DROP TABLE public.carts;
       public         heap    postgres    false            �            1259    41922    carts_cart_id_seq    SEQUENCE     �   CREATE SEQUENCE public.carts_cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.carts_cart_id_seq;
       public          postgres    false    222            �           0    0    carts_cart_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.carts_cart_id_seq OWNED BY public.carts.cart_id;
          public          postgres    false    221            �            1259    41905    products    TABLE     �   CREATE TABLE public.products (
    product_id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255),
    price double precision NOT NULL,
    quantity integer NOT NULL,
    image character varying(255)
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    41904    products_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.products_product_id_seq;
       public          postgres    false    218            �           0    0    products_product_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.products_product_id_seq OWNED BY public.products.product_id;
          public          postgres    false    217            �            1259    41914 
   promotions    TABLE     �   CREATE TABLE public.promotions (
    promotion_id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255),
    discount double precision NOT NULL,
    image character varying(255)
);
    DROP TABLE public.promotions;
       public         heap    postgres    false            �            1259    41913    promotions_promotion_id_seq    SEQUENCE     �   CREATE SEQUENCE public.promotions_promotion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.promotions_promotion_id_seq;
       public          postgres    false    220            �           0    0    promotions_promotion_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.promotions_promotion_id_seq OWNED BY public.promotions.promotion_id;
          public          postgres    false    219            �            1259    41893    users    TABLE     �   CREATE TABLE public.users (
    user_id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    name character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    41892    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    216            �           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    215            -           2604    41926    carts cart_id    DEFAULT     n   ALTER TABLE ONLY public.carts ALTER COLUMN cart_id SET DEFAULT nextval('public.carts_cart_id_seq'::regclass);
 <   ALTER TABLE public.carts ALTER COLUMN cart_id DROP DEFAULT;
       public          postgres    false    221    222    222            +           2604    41908    products product_id    DEFAULT     z   ALTER TABLE ONLY public.products ALTER COLUMN product_id SET DEFAULT nextval('public.products_product_id_seq'::regclass);
 B   ALTER TABLE public.products ALTER COLUMN product_id DROP DEFAULT;
       public          postgres    false    218    217    218            ,           2604    41917    promotions promotion_id    DEFAULT     �   ALTER TABLE ONLY public.promotions ALTER COLUMN promotion_id SET DEFAULT nextval('public.promotions_promotion_id_seq'::regclass);
 F   ALTER TABLE public.promotions ALTER COLUMN promotion_id DROP DEFAULT;
       public          postgres    false    220    219    220            )           2604    41896    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    41923    carts 
   TABLE DATA           G   COPY public.carts (cart_id, user_id, product_id, quantity) FROM stdin;
    public          postgres    false    222   n'       �          0    41905    products 
   TABLE DATA           Y   COPY public.products (product_id, name, description, price, quantity, image) FROM stdin;
    public          postgres    false    218   �'       �          0    41914 
   promotions 
   TABLE DATA           V   COPY public.promotions (promotion_id, name, description, discount, image) FROM stdin;
    public          postgres    false    220   i1       �          0    41893    users 
   TABLE DATA           E   COPY public.users (user_id, email, password, role, name) FROM stdin;
    public          postgres    false    216   &6       �           0    0    carts_cart_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.carts_cart_id_seq', 262, true);
          public          postgres    false    221            �           0    0    products_product_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.products_product_id_seq', 23, true);
          public          postgres    false    217            �           0    0    promotions_promotion_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.promotions_promotion_id_seq', 1, false);
          public          postgres    false    219            �           0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_user_id_seq', 7, true);
          public          postgres    false    215            7           2606    41928    carts carts_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (cart_id);
 :   ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
       public            postgres    false    222            3           2606    41912    products products_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    218            5           2606    41921    promotions promotions_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.promotions
    ADD CONSTRAINT promotions_pkey PRIMARY KEY (promotion_id);
 D   ALTER TABLE ONLY public.promotions DROP CONSTRAINT promotions_pkey;
       public            postgres    false    220            /           2606    41903    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    216            1           2606    41901    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            8           2606    41936    carts carts_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(product_id) ON UPDATE CASCADE ON DELETE CASCADE;
 E   ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_product_id_fkey;
       public          postgres    false    218    4659    222            9           2606    41931    carts carts_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;
 B   ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_user_id_fkey;
       public          postgres    false    222    4657    216            �   X   x�5���0���
�!�.������F�kh��C�BуĄK[Jɳ������W��D�~��l�x4+����[������}j0      �   �	  x��X[o�~~E=m^�tݺ�+�*b�]V���,��R�UmOb�X�!�<��,ry���V��c��f����/t���S���l53U]���|լS�P��j�ڮ���,����2�¬�������cy\=-H�unA�EʓrRm���|�ӎ�}Rm×��c���������M��C������o�1��O���N�uW��;+����Q�������n>X�d"�GyQ%�&"-e�Vr�,1�����߬/_���;���j�|K���Urwq��&�? �=bc��N| ��r����zV��=�,�qX� �h\�Dp�S|����8d��ǸA��x/m��وg��`�3�ł�4�IZT�Tg��Xı��@xc�����A������޽%;�!��Z��`&��J��z��`҉�8 ��Iyt�C�� R<Xp�����6�E�:�"uynx8%� R)+�d,IT���Þq��	Dq�?�9�/��:�`�m�~���!^�,�ú����n���T�N'/�{p.�����n�#,цK��#À�"�i��ȵ̴�ڤ����20��/�-���7�6��/��ׯ��w;�0xfV(=L���@WϡN��D���2�)�U�������H��m��"�G*��US�r㌕6eΤ��b"�SIu��!T848�I�M����:�[4�,n�

 ������~�P��
��Jk���HF��)�Re���'��?>��s�4&WM�'�o/����ﱈ0E��� �)�S��n���t!o|a���TϪ��[���N��r��_u;�a���s<���q����0fTA��E�2�C��U�J�6ȕ�zoÝ�e���1�P[T�K�.���Oк������3AOZ��2�2RR*'\�Y�J�i�+�,a�e�苊��`�ȝ{=7�:X+#"b���|t�]
A餇��X�ԫ������"1L1K
jr!����+�ѹ�� ��!=��U��+d�m�ܐ$8O�'�$H �!��f=�;�B���2Ta�q���C�)����HD2�2
	bfx���P�ڤp:�8K3*2� �)�[h�u����ڍ��Zo��q/���C��蝋|!��AB�G�7�-/(��65W��~`z�����~�Zq*"GF� ,��qac��0Yۂ��Ryԏ]��L��`�[�>�T��.B��[t.�oHlSu��HIp�05�c'b ���@�%LKj.1�f�{����Ε5�{��|����'2��IЈ� /s�*�g��A���1N�w�P�N�M�Y�8J�8-���rP^�i��'�}Ƃ�3y��.v�&5�`����/����V-x�[ȣ�aM���\�l�;�p-$�����c�Ȣ��� �g�Pa2Z�4)�ź\ �Y 	��o�b��5F"Aj s�I\\5�Ff���6�﷭�������i��h.��V\�F�T0�*c�L�,<(�f<�PY�I�$
���<n���ސ������N�YY���ys��0	_���q�J�
rևLѠ��Qo1K���<Κ����c2�i�S�4�f��4U6����<Ι�S��(��f���~�����P0���(�����순�͐]@�ἧ�(�w�w��h��C�x��$�5�N�N<�EoiDc���������<�ޭ
�$��c*iQ��F'>,���C���5G���n�tʿ��m��u��6����f�ip�"���$��[o�����!�N�d�G1yDY�P��<�	t�D���&I����F��%�����mU��~��?ڼ��ts�>ǐW�����iY��lKKI�W�{-�$�+��#W΄���맡9��ޠ��2�;�dp��ya��p�^8����.��EHXB;�c4�M=��M��������)6�;32��v��u��}7�z?��O���J�ܓ�|�L\^8i�cNi.c�0�2Cy�q��[3�n�0Z���?���%�y�'�e���X�a8����:?[Bx�������6JRk�c��woL��N.��i̤��f���K�&�3w�M�zQ�=��>젎*�,��$�ђx�F,��K8�t�b�p�&�Y�g�C��������~�d�
*��o��bT�6xK݃?����	G5���`5����Z�_!T;��{��]��.R�>O����bu���.��?�m���A�
o�|�Md{~���x�NGCm�ٹH���0���"�ik��
���)��,�k���Q[��;gi�k!8�g�Ծ�X$�o]�9�f`�wיߘ�{Y;�> *����{��'�g0���`е}.����x�����~�	B��S����df����5p��)G��2+�:�┃Y��
�;i\�͸'���K�.���K�      �   �  x��V�N#G}��?`�3}����E�)�����t��#c,p$x[�eE�Uޢ(Q���a���B����\�+2.�TW�9u�z�g��7�_�+{��i�͝���dY���i0�����hG屽$��̆r��Ay�c{��~�����gvhG���3[�ӭ��š[(��-����^��=z����n:��1���75��F��������N���\��[���Į�_+?R`h�L�\$Z�:U�T(�\�X��]g}�y�w| '������I�c��!�\��՝	���8U4@򈰸O�FSq1��p��psO����vr��br��j�\0�+�0�bFs��<�t"�<
C����P�)��ˑ�� �%��ɛׯ���'��̪$S^ kܻ���t�~97`�!9G	���@����w�	8�&���|����c�5M�<��U �0cyD�8�G�³�@ҽJ����OU{�M^�i�U��?Pf��N������|"N럅�V�C��/���<�����(j�-��Ql�����!�O�/0�	��b#Y�6)34�
3ɐ�г��SLe�А�� ���R{���6����+�b�F��u�C�N��uE��p�Z=�?��9>�$ 3�gei���y�C_�~��!b(��L�$�:˃�fR%:�k�0���N[C��>��|��y���i����!���>b�A�#h���b��|١;��p�~��K���q���ׅ�����}�K�6�����4#54�"JY}
�y�����f�ܒi��Z�A��*�?;���l��}����r�i?!?g(��*��5��6p�u׉k��ȉ琣�'@,�?s�#��(I����e��PK 9�#� ��eil���ە�4��o`���Mz;ѿC1�hf�SB5�p��[y��O��g��� ��EǏd��<a�Џ3?b`�Y�XbR%��<b4� 7"MDZ�	T��C�Gn�Oz�YW�ooM_�X�W��j�ͶzJO�z�n�i�5�����+}b�X��#���aL��h"� ���t��<�>�H����9�_�NtW.m�U���]�����#��]�lR��x�����k���XH �8q�|�q�&��=�j���ϻ� C�ad*3et"YK*c�:	Y�E�K$�����¿]p�      �   q  x�m̻r�@�z�)RXc ��;/q�I�*�\\ ���*]2y����3�Iby���3��S���ǂ8D����p�������'{� }���3=�oȝ?ܿk�o�A�=@�k{7Y�MX k�Y>�qr���r���GÅH����@vp��3����^g�:��ςj��(��2�&<��Ի��� �z%�z��PSاBK���5�iXiƍ��Y����z:�t��ӬHO�n޸x�@��U\�������8�T�����-Ib_^�n���B�x=X�L'0���4&��m/&}��E�ٞ~f��X�����b�����"�Y����%f@v�F�V����$�y�[/xi�5A���U�ր�����?     