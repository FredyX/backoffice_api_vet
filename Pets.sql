--CREATE SCHEMA pet;
-- Se crea la tabla persona contiene todos los atributos comunes entre ellos los roles
-- Solo el rol admin podra crear personas
CREATE TABLE pet.persons (
  id_person INT IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(50),
  last_name VARCHAR(50),
  phone VARCHAR(20),
  direction VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  rol VARCHAR(20),
  id_creator INT,
  FOREIGN KEY (id_creator)
    REFERENCES pet.persons(id_person)
);

CREATE TABLE pet.incharges (
    id_inchage INT PRIMARY KEY,
    id_person INT UNIQUE FOREIGN KEY REFERENCES pet.persons(id_person),
    id_type_service INT FOREIGN KEY REFERENCES pet.type_services(id_service)
);

CREATE TABLE pet.sellers (
    id_seller INT PRIMARY KEY,
    id_person INT FOREIGN KEY REFERENCES pet.persons(id_person),
    rol VARCHAR(50),
    total_sold INT
);

CREATE TABLE pet.type_services (
    id_service INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
CREATE TABLE pet.type_services_incharges(
    id_type_service INT NOT NULL,
    id_incharge INT NOT NULL,

    CONSTRAINT pk_type_service_incharge PRIMARY KEY( id_incharge, id_type_service),
    CONSTRAINT fk_type_service FOREIGN KEY (id_type_service) REFERENCES pet.type_services(id_service),
    CONSTRAINT fk_incharges FOREIGN KEY (id_inchage) REFERENCES pet.incharges(id_inchage)    
);
CREATE TABLE pet.pets(
    id_pet INT IDENTITY(1,1) PRIMARY KEY,
    id_type_pet INT NOT NULL,
    id_person INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    FOREIGN KEY (id_person) REFERENCES pet.persons(id_person) ON DELETE CASCADE
);

CREATE TABLE pet.type_pet(
	id_type_pet INT PRIMARY KEY NOT NULL,
	name_type VARCHAR(50) NOT NULL
);

ALTER TABLE pet.pets
ADD FOREIGN KEY (id_type_pet) REFERENCES pet.type_pet(id_type_pet)

CREATE TABLE pet.apointment(
    id_apointment INT IDENTITY(1,1) PRIMARY KEY,
    id_type_service INT NOT NULL,
    id_person INT NOT NULL,
    id_inchage INT NOT NULL,
    id_pet INT NOT NULL,
    detail VARCHAR(2000),
    date DATETIME,
    stage BIT NOT NULL,

    CONSTRAINT fK_type_service FOREIGN KEY (id_type_service) REFERENCES pet.type_services(id_service),
    CONSTRAINT fK_person   FOREIGN KEY (id_person)  REFERENCES  pet.persons(id_person),
    CONSTRAINT fK_inchage  FOREIGN KEY (id_inchage) REFERENCES  pet.incharges( id_inchage),
    CONSTRAINT fK_pets FOREIGN KEY  (id_pet)  REFERENCES pet.pets(id_pet)

);
CREATE TABLE pet.disability(
    id_disabilty INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
);

CREATE TABLE pet.prescriptions(
    id_prescription INT IDENTITY(1,1) PRIMARY KEY,
    detail VARCHAR(2000),
);



CREATE TABLE pet.sales(
    id_sale INT IDENTITY(1,1) PRIMARY KEY,
    id_type_sale INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    CONSTRAINT fk_type_sale FOREIGN KEY (id_type_sale) REFERENCES pet.type_sale(id_type_sale)
);

CREATE TABLE pet.type_sale(
    id_type_sale INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
);
CREATE TABLE pet.products(
    id_product INT IDENTITY(1,1) PRIMARY KEY,
    id_sale INT NULL,
    name VARCHAR(100) NOT NULL,
    detail VARCHAR(1000),
    price DECIMAL(8,2) NOT NULL,
    stage VARCHAR(10) CHECK (stage IN ('sold', 'available')),
    brand VARCHAR(50) NOT NULL,
  	CONSTRAINT fk_sale FOREIGN KEY(id_sale) REFERENCES pet.sales(id_sale) 
);

CREATE TABLE pet.disability_pet(
    id_disability INT NOT NULL,
    id_pet INT NOT NULL,

    CONSTRAINT pk_disbility_pet PRIMARY KEY( id_disability, id_pet),
    CONSTRAINT fk_disability FOREIGN KEY (id_disability) REFERENCES pet.disability(id_disabilty),
    CONSTRAINT fk_pet FOREIGN KEY (id_pet) REFERENCES pet.pets(id_pet)
);

CREATE TABLE pet.prescription_product(
    id_prescription INT NOT NULL,
    id_product INT NOT NULL,
    date DATETIME,

    CONSTRAINT pk_prescription_product PRIMARY KEY (id_prescription, id_product),
    CONSTRAINT fk_product FOREIGN KEY (id_product) REFERENCES pet.products( id_product),
    CONSTRAINT fk_prescription FOREIGN KEY (id_prescription) REFERENCES pet.prescriptions(id_prescription)
);