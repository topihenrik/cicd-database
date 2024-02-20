#!/bin/bash

# Path to the PostgreSQL data directory
PG_DATA_DIR=/etc/postgresql/14/main

# Backup the existing pg_hba.conf file
cp $PG_DATA_DIR/pg_hba.conf $PG_DATA_DIR/pg_hba.conf.bak

# Replace peer with trust for local connections
sed -i 's/local\s\+all\s\+all\s\+peer/local all all trust/' $PG_DATA_DIR/pg_hba.conf

# Reload PostgreSQL for the changes to take effect
service postgresql reload