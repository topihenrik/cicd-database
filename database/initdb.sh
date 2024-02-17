#!/bin/bash

psql -a -f initdb.sql
psql -U stocking -d StocKing -W postgres -a -f init_tables.sql
