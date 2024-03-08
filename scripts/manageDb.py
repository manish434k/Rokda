
from aifc import Error
import sqlite3
import argparse

def create_connection(db_file):
    """
    Create a database connection to the SQLite database specified by db_file.
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)
        return conn

def create_table(conn, create_table_sql):
    """
    Create a table from the create_table_sql statement.
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)

def list_tables(db_file):
    try:
        conn = sqlite3.connect(db_file)
        cursor = conn.cursor()
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = cursor.fetchall()
        return [table[0] for table in tables]
    except sqlite3.Error as e:
        print(f"Error: {e}")
    finally:
        if conn:
            conn.close()      

def insert_ListedStock(db_file, symbol, companyName):
    try:
        conn = sqlite3.connect(db_file)
        cursor = conn.cursor()
        sql = "INSERT INTO ListedStock (Symbol, CompanyName) VALUES (?, ?)"
        values = (symbol, companyName)
        cursor.execute(sql, values)
        conn.commit()
        print(f"{cursor.rowcount} record inserted.")
    except sqlite3.Error as e:
        print(e)  

def show_ListedStock(db_file):
    try:
        conn = sqlite3.connect(db_file)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM ListedStock")
        rows = cursor.fetchall()
        return rows
    except sqlite3.Error as e:
        print(e)
    finally:
        if conn:
            conn.close()                    

def main():
    parser = argparse.ArgumentParser(description="Tool to manage database")
    parser.add_argument("--createDb", "-c", help="db file name")
    parser.add_argument("--listDb", "-l", help="lists all table in db")
    parser.add_argument("--listTable", "-t", help="lists all table item")
    parser.add_argument("--insertTable", "-i", help="lists all table item")

    args = parser.parse_args()
    database = r"db\\Investment.db"
    # Create a database connection
    
    if args.createDb != None:
        print(args.createDb)
        # database = {args.createDb}
        # Create a database connection
        conn = create_connection(database)
 
    elif args.listDb != None:
        all_tables = list_tables(database)
        print("List of tables:")
        for table in all_tables:
            print(table)
            
    elif args.listTable != None:
        all_rows = show_ListedStock(database)
        for row in all_rows:
            print(row)
        

    elif args.insertTable != None:
        insert_ListedStock(database, "RELIANCE", "Reliance Industries Limited")
        insert_ListedStock(database, "TCS", "Tata Consultancy Services Limited")
        print(args.insertTable)        


    return
    
        
    # SQL statement to create the ListedStock table
    sql_create_listedstock_table = """
    CREATE TABLE IF NOT EXISTS ListedStock (
        id INTEGER PRIMARY KEY,
        Symbol TEXT NOT NULL,
        CompanyName TEXT NOT NULL
    );
    """
    
   
    
    # Create the ListedStock table
    if conn is not None:
        create_table(conn, sql_create_listedstock_table)
        print("Table 'ListedStock' created successfully.")
    else:
        print("Error: Unable to establish a database connection.")

    

if __name__ == '__main__':
    main()