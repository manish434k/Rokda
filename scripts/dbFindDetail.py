import sqlite3


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

def get_db_details(db_path):
    # Connect to the SQLite database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Get the list of all tables
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()

    print(f"Database: {db_path}")
    print(f"Number of tables: {len(tables)}")

    # For each table, get the count of entries
    for table in tables:
        table = table[0]  # Get table name from tuple
        cursor.execute(f"SELECT COUNT(*) FROM {table};")
        count = cursor.fetchone()[0]
        print(f"Table: {table}, Entries: {count}")

    # Close the connection
    conn.close()

# Use the function
get_db_details('./db/Investment.db')
