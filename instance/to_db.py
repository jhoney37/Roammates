import sqlite3
import os

if __name__ == '__main__':
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(BASE_DIR, "flaskr.sqlite")

    def convertToBinaryData(filename):
        # Convert digital data to binary format
        with open(filename, 'rb') as file:
            blobData = file.read()
        return blobData

    def insert_blob(photo, group):
        con = sqlite3.connect(db_path)
        cur = con.cursor()
        blob = convertToBinaryData(photo)

        cur.execute(
            """
            UPDATE Groups
            SET avatar = ?
            WHERE title = ?
            """, (blob, group,))

        con.commit()
        cur.close()

    def write_to_text(blob):
        with open('blobs.txt', 'w') as f:
            f.write(blob)


    # if os.path.isfile(db_path):
    insert_blob('static/assets/avatars/Europe.png', 'Wanderlust Explorers')
    insert_blob('static/assets/avatars/SE Asia.png', 'Tropical Adventure Seekers')
    insert_blob('static/assets/avatars/New York.png', 'Urban Jungle Expedition')
    insert_blob('static/assets/avatars/Amazon Rainforest.png', 'Wildlife Conservation Expedition')
    insert_blob('static/assets/avatars/Kyoto.png', 'Cultural Immersion in Kyoto')
    insert_blob('static/assets/avatars/Galapagos Islands.png', 'Sun, Sand, and Science')
    # else:
    #     print("Doesn't exist.")
