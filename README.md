# **PyCon Amazônia 2017. Site Oficial**

[![Build Status](https://travis-ci.org/PyNorte/pyconamazonia2017-site.svg?branch=master)](https://travis-ci.org/PyNorte/pyconamazonia2017-site)

Esse é o portal oficial da **PyCon Amazônia 2017**, criado de maneira colaborativa.

https://pynorte.github.io/pyconamazonia2017-site/


## **Contribuições**

Se você tem interesse de contribuir com o site, faça o fork desse repositorio clicando [aqui](https://github.com/PyNorte/pyconamazonia2017-site/fork), em seguida, faça o clone do seu fork da seguinte forma:

```
$ git clone https://github.com/seu_usuario_do_github/pyconamazonia2017-site.git
```

Faça as modificações que achar necessário e mande o pull-request


### **Executando com docker-compose, the fast-way (recomendado)**

Se você possuir [Docker Compose](https://docs.docker.com/compose/install/) instalado em seu ambiente, este é o caminho mais rápido para o site rodar em sua máquina.

Dentro da pasta do projeto, execute o seguinte comando:

```
$ docker-compose up
```

Em seguida acesse pelo navegador a URL [http://localhost:8000](http://localhost:8000).


### **Instalação manual, the safe- and detailed-way**

Caso prefira a instalação e execução manual do site, os passos seguintes descrevem a instalação de dependências e execução.


#### **Instalando todas as dependências**

```
With Yum:
$ sudo yum install python-virtualenvwrapper libxslt-devel libxml2-devel rubygem-sass nodejs npm

With apt-get:
$ sudo apt-get install libxml2-dev libxslt1-dev python-dev nodejs npm
$ sudo pip install virtualenvwrapper

$ cd pyconamazonia2017-site
$ npm install gulp gulp-uglify gulp-concat gulp-sass
$ export WORKON_HOME="~/venv"
$ . /usr/bin/virtualenvwrapper.sh
# OR
$ . /usr/local/bin/virtualenvwrapper.sh
$ mkvirtualenv pybr12-site
$ workon pybr12-site && pip install -r requirements.txt
```

#### **Utilizando Ansible**
Junto com o repositório existe um playbook para ansible que suporta as distribuições GNU/Linux RedHat-Like e Debian-Like.

Para utilizar o playbook do ansible utilize os seguintes comandos:

```
$ sudo yum install ansible
$ make ansible-setup
```

#### **Compilando o Site**

Após a criação do ambiente (manualmente ou via ansible), para compilar o site execute o seguinte comando:
```
$ workon pybr12-site
$ make html serve
```

Em seguida acesse pelo navegador a URL [http://localhost:8000](http://localhost:8000).
