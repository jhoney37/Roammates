INSERT INTO Users(id, username, password, email, created_at, name, pronouns, bio, avatar)
VALUES
('john_doe', 'password123', 'johndoe@uncc.edu', CURRENT_TIMESTAMP, 'John Doe', 'He/Him', 'Bio of John', 'avatar1.jpg'),
('jane_doe', 'password123', 'janedoe@uncc.edu', CURRENT_TIMESTAMP, 'Jane Doe', 'She/Her', 'Janes Bio', 'avatar2.jpg'),
('mike_smith', 'password123', 'mikesmith@uncc.edu', CURRENT_TIMESTAMP, 'Mike Smith', 'He/Him', 'Bio of Mike', 'avatar3.jpg'),
('emma_jones', 'password123', 'emmajones@uncc.edu', CURRENT_TIMESTAMP, 'Emma Jones', 'She/Her', 'Bio of Emma', 'avatar4.jpg'),
('alex_brown', 'password123', 'alexbrown@uncc.edu', CURRENT_TIMESTAMP, 'Alex Brown', 'They/Them', 'Bio of Alex', 'avatar5.jpg'),
('sarah_white', 'password123', 'sarahwhite@uncc.edu', CURRENT_TIMESTAMP, 'Sarah White', 'She/Her', 'Bio of Sarah', 'avatar6.jpg'),
('david_lee', 'password123', 'davidlee@uncc.edu', CURRENT_TIMESTAMP, 'David Lee', 'He/Him', 'Bio of David', 'avatar7.jpg'),
('lisa_green', 'password123', 'lisagreen@uncc.edu', CURRENT_TIMESTAMP, 'Lisa Green', 'She/Her', 'Bio of Lisa', 'avatar8.jpg'),
('james_moore', 'password123', 'jamesmoore@uncc.edu', CURRENT_TIMESTAMP, 'James Moore', 'He/Him', 'Bio of James', 'avatar9.jpg'),
('laura_taylor', 'password123', 'laurataylor@uncc.edu', CURRENT_TIMESTAMP, 'Laura Taylor', 'She/Her', 'Bio of Laura', 'avatar10.jpg');

INSERT INTO Posts (id, author, title, context, created_at)
VALUES 
('First Post', 'This is the first post content.', CURRENT_TIMESTAMP),
('Second Post', 'This is the second post content.', CURRENT_TIMESTAMP),
('Third Post', 'This is the third post content.', CURRENT_TIMESTAMP),
('Fourth Post', 'This is the fourth post content.', CURRENT_TIMESTAMP),
('Fifth Post', 'This is the fifth post content.', CURRENT_TIMESTAMP),
('Sixth Post', 'This is the sixth post content.', CURRENT_TIMESTAMP),
('Seventh Post', 'This is the seventh post content.', CURRENT_TIMESTAMP),
('Eighth Post', 'This is the eighth post content.', CURRENT_TIMESTAMP),
('Ninth Post', 'This is the ninth post content.', CURRENT_TIMESTAMP),
('Tenth Post', 'This is the tenth post content.', CURRENT_TIMESTAMP);

INSERT INTO Replies (id, post_id, user_id, content, created_at)
VALUES
(2, 3, 'This is a reply to the first post.', CURRENT_TIMESTAMP),
(3, 5, 'This is a reply to the second post.', CURRENT_TIMESTAMP),
(4, 1, 'This is a reply to the third post.', CURRENT_TIMESTAMP),
(5, 1, 'This is a reply to the fourth post.', CURRENT_TIMESTAMP),
(6, 7, 'This is a reply to the fifth post.', CURRENT_TIMESTAMP),
(7, 4, 'This is a reply to the sixth post.', CURRENT_TIMESTAMP),
(8, 6, 'This is a reply to the seventh post.', CURRENT_TIMESTAMP),
(9, 4, 'This is a reply to the eighth post.', CURRENT_TIMESTAMP),
(10, 9, 'This is a reply to the ninth post.', CURRENT_TIMESTAMP),
(1, 3, 'This is a reply to the tenth post.', CURRENT_TIMESTAMP);

INSERT INTO Groups(id, title, location, description)
VALUES
('Group One', 'France Spring Break', 'Location 1', 'Description of Group One'),
('Group Two', 'New York City Trip', 'Location 2', 'Description of Group Two'),
('Group Three', 'Wilmington Beach Trip', 'Location 3', 'Description of Group Three'),
('Group Four', 'Los Angeles Trip', 'Location 4', 'Description of Group Four'),
('Group Five', 'Miami Trip', 'Location 5', 'Description of Group Five'),
('Group Six', 'Chicago Trip', 'Location 6', 'Description of Group Six'),
('Group Seven', 'London Trip', 'Location 7', 'Description of Group Seven'),
('Group Eight', 'Charlotte Locals', 'Location 8', 'Description of Group Eight'),
('Group Nine', 'Raleigh IT Conference','Location 9', 'Description of Group Nine'),
('Group Ten', 'Atlanta Business Conference ','Location 10', 'Description of Group Ten');

INSERT INTO GroupMembers(id, group_id, user_id)
VALUES 
('Group One', 'john_doe'),
('Group Two', 'jane_doe'),
('Group Three', 'mike_smith'),
('Group Four', 'emma_jones'),
('Group Five', 'alex_brown'),
('Group Six', 'sarah_white'),
('Group Seven', 'david_lee'),
('Group Eight', 'lisa_green'),
('Group Nine', 'james_moore'),
('Group Ten', 'laura_taylor');