#!/bin/bash

# psql -U postgres -a -f init-test-db.sql
psql -U runner -d StocKingTest -a -f init_tables.sql
