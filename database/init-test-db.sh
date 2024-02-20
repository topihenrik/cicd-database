#!/bin/bash

# psql -U postgres -a -f init-test-db.sql
psql -U stockingtest -d StocKingTest -a -f init_tables.sql
