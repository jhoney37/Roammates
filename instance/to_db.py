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

    def insert_blob(photo, user_id):
        con = sqlite3.connect(db_path)
        cur = con.cursor()
        blob = convertToBinaryData(photo)

        cur.execute(
            """
            UPDATE Users
            SET avatar = ?
            WHERE id = ?
            """, (blob, user_id,))

        con.commit()
        cur.close()

    # insert_blob('static/assets/avatars/Europe.png', 'Wanderlust Explorers')
    # insert_blob('static/assets/avatars/SE Asia.png', 'Tropical Adventure Seekers')
    # insert_blob('static/assets/avatars/New York.png', 'Urban Jungle Expedition')
    # insert_blob('static/assets/avatars/Amazon Rainforest.png', 'Wildlife Conservation Expedition')
    # insert_blob('static/assets/avatars/Kyoto.png', 'Cultural Immersion in Kyoto')
    # insert_blob('static/assets/avatars/Galapagos Islands.png', 'Sun, Sand, and Science')
    
    #profile pictures for users
    insert_blob('C:/Users/ayish/Desktop/flask-sqlalchemy/Roammates/flaskr/static/assets/avatars/taylorjohnson.png', 'Taylor Johnson')
    insert_blob('C:/Users/ayish/Desktop/flask-sqlalchemy/Roammates/flaskr/static/assets/avatars/alexrodriguez.png', 'Alex Rodriguez')
    insert_blob('C:/Users/ayish/Desktop/flask-sqlalchemy/Roammates/flaskr/static/assets/avatars/jordanwilliams.png', 'Jordan Williams')
    insert_blob('C:/Users/ayish/Desktop/flask-sqlalchemy/Roammates/flaskr/static/assets/avatars/morganlee.png', 'Morgan Lee')
    insert_blob('C:/Users/ayish/Desktop/flask-sqlalchemy/Roammates/flaskr/static/assets/avatars/cameronpatel.png', 'Cameron Patel')
