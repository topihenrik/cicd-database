#!/bin/bash

psql -a -f init-test-db.sql
psql -d StocKingTest -a -f init_tables.sql
