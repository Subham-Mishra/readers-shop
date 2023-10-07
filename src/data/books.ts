import { Book } from "~/iterfaces";

function generateRandomId(): string {
  return Math.random().toString(36).slice(2, 10);
}

const books: Book[] = [
  {
    id: generateRandomId(),
    isFeatured: true,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationDate: "1925",
    coverImageLink:
      "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
    details:
      "A classic novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.",
    genre: "Fiction",
    price: 250,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationDate: "1960",
    coverImageLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    details:
      "Set in the American South during the 1930s, this novel deals with racial injustice and moral growth.",
    genre: "Fiction",
    price: 450,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "1984",
    author: "George Orwell",
    publicationDate: "1949",
    coverImageLink:
      "https://m.media-amazon.com/images/I/71NvkZxn-fL._AC_UF1000,1000_QL80_.jpg",
    details:
      "A dystopian novel that explores surveillance, propaganda, and totalitarianism in a bleak future society.",
    genre: "Fiction",
    price: 150,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "Pride and Prejudice",
    author: "Jane Austen",
    publicationDate: "1813",
    coverImageLink:
      "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    details:
      "A classic romance novel set in 19th-century England, focusing on social class and relationships.",
    genre: "Romance",
    price: 520,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationDate: "1951",
    coverImageLink:
      "https://rukminim2.flixcart.com/image/850/1000/kufuikw0/book/p/a/q/the-catcher-in-the-rye-original-imag7jttju9vfuxa.jpeg?q=20",
    details:
      "A coming-of-age novel following the adventures of Holden Caulfield in New York City.",
    genre: "Fiction",
    price: 210,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publicationDate: "1997",
    coverImageLink:
      "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781408855652.jpg",
    details:
      "The first book in the Harry Potter series, introducing the young wizard's journey at Hogwarts.",
    genre: "Fantasy",
    price: 780,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    publicationDate: "1937",
    coverImageLink:
      "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
    details:
      "A fantasy novel following Bilbo Baggins on a quest to reclaim treasure guarded by a dragon.",
    genre: "Fantasy",
    price: 120,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Hunger Games",
    author: "Suzanne Collins",
    publicationDate: "2008",
    coverImageLink:
      "https://m.media-amazon.com/images/I/71WSzS6zvCL._AC_UF1000,1000_QL80_.jpg",
    details:
      "The first book in a dystopian series where teenagers fight to the death in a televised competition.",
    genre: "Fiction",
    price: 420,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Alchemist",
    author: "Paulo Coelho",
    publicationDate: "1988",
    coverImageLink: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
    details:
      "A philosophical novel about a shepherd's journey to discover his personal legend.",
    genre: "Fiction",
    price: 340,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Shining",
    author: "Stephen King",
    publicationDate: "1977",
    coverImageLink:
      "https://cdn.kobo.com/book-images/c6b01ca1-74fc-4986-b958-f3ea423a2da5/1200/1200/False/the-shining.jpg",
    details:
      "A horror novel about a family's winter stay at a haunted hotel, leading to madness and terror.",
    genre: "Horror",
    price: 620,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "Brave New World",
    author: "Aldous Huxley",
    publicationDate: "1932",
    coverImageLink:
      "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
    details:
      "A dystopian novel depicting a futuristic society controlled by technology and conditioning.",
    genre: "Fiction",
    price: 245,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publicationDate: "1954",
    coverImageLink:
      "https://m.media-amazon.com/images/I/71b3KeYQgIL._AC_UF1000,1000_QL80_.jpg",
    details:
      "An epic fantasy trilogy following Frodo's quest to destroy the One Ring and save Middle-earth.",
    genre: "Fantasy",
    price: 535,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "Jane Eyre",
    author: "Charlotte Brontë",
    publicationDate: "1847",
    coverImageLink: "https://m.media-amazon.com/images/I/41hXKEIKGvL.jpg",
    details:
      "A Gothic novel telling the story of Jane Eyre, an orphan who becomes a governess.",
    genre: "Fiction",
    price: 295,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Da Vinci Code",
    author: "Dan Brown",
    publicationDate: "2003",
    coverImageLink:
      "https://m.media-amazon.com/images/I/71DAQuN7jhL._AC_UF1000,1000_QL80_.jpg",
    details:
      "A thriller novel unraveling mysteries related to art, religion, and history.",
    genre: "Thriller",
    price: 580,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "Moby-Dick",
    author: "Herman Melville",
    publicationDate: "1851",
    coverImageLink:
      "https://m.media-amazon.com/images/I/91DhazpQXML._AC_UF1000,1000_QL80_.jpg",
    details:
      "An epic novel about Captain Ahab's obsessive pursuit of the great white whale.",
    genre: "Adventure",
    price: 960,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Road",
    author: "Cormac McCarthy",
    publicationDate: "2006",
    coverImageLink:
      "https://m.media-amazon.com/images/M/MV5BMTAwNzk4NTU3NDReQTJeQWpwZ15BbWU3MDg3OTEyODI@._V1_.jpg",
    details:
      "A post-apocalyptic novel following a father and son's journey through a desolate world.",
    genre: "Fiction",
    price: 875,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    publicationDate: "1950",
    coverImageLink:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg",
    details:
      "A fantasy series featuring adventures in the magical land of Narnia.",
    genre: "Fantasy",
    price: 250,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    publicationDate: "1967",
    coverImageLink:
      "https://cdn.penguin.co.uk/dam-assets/books/9780241968581/9780241968581-jacket-large.jpg",
    details:
      "A magical realist novel tracing the history of the Buendía family in Macondo.",
    genre: "Realism",
    price: 150,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Road Less Traveled",
    author: "M. Scott Peck",
    publicationDate: "1978",
    coverImageLink:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1322673263i/347852.jpg",
    details:
      "A self-help book exploring the path to personal growth and fulfillment.",
    genre: "Self-Help",
    price: 475,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Martian",
    author: "Andy Weir",
    publicationDate: "2011",
    coverImageLink:
      "https://cdn.kobo.com/book-images/07e6e6ff-c92f-413a-aaad-a9a00a671c92/1200/1200/False/the-martian-21.jpg",
    details:
      "A science fiction novel about an astronaut stranded on Mars, trying to survive and find a way back to Earth.",
    genre: "Fiction",
    price: 160,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "Dune",
    author: "Frank Herbert",
    publicationDate: "1965",
    coverImageLink:
      "https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_.jpg",
    details:
      "A science fiction epic set in a distant future, with political intrigue and desert planets.",
    genre: "Fiction",
    price: 285,
  },
  {
    id: generateRandomId(),
    isFeatured: false,
    name: "The Odyssey",
    author: "Homer",
    publicationDate: "8th century BCE",
    coverImageLink:
      "https://m.media-amazon.com/images/I/A15XQ+h74LL._AC_UF1000,1000_QL80_.jpg",
    details:
      "An ancient Greek epic poem that follows the adventures of Odysseus on his journey home from the Trojan War.",
    genre: "Poetry",
    price: 150,
  },
];

export default books;
