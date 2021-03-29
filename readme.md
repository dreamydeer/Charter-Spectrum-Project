# Charter Spectrum Project
This is for an application to Charter Spectrum. It calculates reward points for customers based on their purchases. Customers receive 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction. Given a record of every transaction during a three month period, it calculates the reward points earned for each customer per month and total.

A static version of this application can be viewed at http://customerdata.surge.sh/. 

## Build Instructions

To build from source, clone this repository, navigate to the cloned directory and run the following commands:

    cd charter-spectrum-frontend
    npm install
    npm run build
    npm run link

Then open the repository in your Java editor of choice and run gradle bootRun. Once the spring project is up you should be able to view the demo in your browser at localhost:8080

## Data Set
The data set used here can be found below, as well as in customerData.json:

    [
      {
        "name": "Jack London",
        "purchases": [
          {
            "value": 120,
            "month": "September"
          },
          {
            "value": 200,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 120,
            "month": "October"
          },
          {
            "value": 30,
            "month": "October"
          },
          {
            "value": 105,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 45,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 20,
            "month": "November"
          }
        ]
      },
      {
        "name": "Shirley Jackson",
        "purchases": [
          {
            "value": 110,
            "month": "September"
          },
          {
            "value": 250,
            "month": "September"
          },
          {
            "value": 72,
            "month": "September"
          },
          {
            "value": 15,
            "month": "September"
          },
          {
            "value": 175,
            "month": "October"
          },
          {
            "value": 30,
            "month": "October"
          },
          {
            "value": 105,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 45,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 20,
            "month": "November"
          }
        ]
      },
      {
        "name": "Stephen King",
        "purchases": [
          {
            "value": 120,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 38,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "Algernon Blackwood",
        "purchases": [
          {
            "value": 125,
            "month": "September"
          },
          {
            "value": 209,
            "month": "September"
          },
          {
            "value": 95,
            "month": "September"
          },
          {
            "value": 15,
            "month": "September"
          },
          {
            "value": 128,
            "month": "October"
          },
          {
            "value": 39,
            "month": "October"
          },
          {
            "value": 187,
            "month": "October"
          },
          {
            "value": 132,
            "month": "October"
          },
          {
            "value": 61,
            "month": "November"
          },
          {
            "value": 90,
            "month": "November"
          },
          {
            "value": 120,
            "month": "Novemer"
          },
          {
            "value": 200,
            "month": "November"
          }
        ]
      },
      {
        "name": "Leo Tolstoy",
        "purchases": [
          {
            "value": 126,
            "month": "September"
          },
          {
            "value": 217,
            "month": "September"
          },
          {
            "value": 65,
            "month": "September"
          },
          {
            "value": 95,
            "month": "September"
          },
          {
            "value": 223,
            "month": "October"
          },
          {
            "value": 28,
            "month": "October"
          },
          {
            "value": 165,
            "month": "October"
          },
          {
            "value": 175,
            "month": "October"
          },
          {
            "value": 55,
            "month": "November"
          },
          {
            "value": 69,
            "month": "November"
          },
          {
            "value": 400,
            "month": "Novemer"
          },
          {
            "value": 307,
            "month": "November"
          }
        ]
      },
      {
        "name": "Ursula Le Guin",
        "purchases": [
          {
            "value": 122,
            "month": "September"
          },
          {
            "value": 217,
            "month": "September"
          },
          {
            "value": 65,
            "month": "September"
          },
          {
            "value": 95,
            "month": "September"
          },
          {
            "value": 223,
            "month": "October"
          },
          {
            "value": 58,
            "month": "October"
          },
          {
            "value": 195,
            "month": "October"
          },
          {
            "value": 115,
            "month": "October"
          },
          {
            "value": 67,
            "month": "November"
          },
          {
            "value": 86,
            "month": "November"
          },
          {
            "value": 153,
            "month": "Novemer"
          },
          {
            "value": 270,
            "month": "November"
          }
        ]
      },
      {
        "name": "Sylvia Plath",
        "purchases": [
          {
            "value": 120,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 95,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 38,
            "month": "October"
          },
          {
            "value": 385,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 170,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "CS Lewis",
        "purchases": [
          {
            "value": 120,
            "month": "September"
          },
          {
            "value": 307,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 98,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 180,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "JRR Tolkien",
        "purchases": [
          {
            "value": 160,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 323,
            "month": "October"
          },
          {
            "value": 38,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 109,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "Lewis Carroll",
        "purchases": [
          {
            "value": 120,
            "month": "September"
          },
          {
            "value": 217,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 38,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 250,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "Fyodor Dostoevksy",
        "purchases": [
          {
            "value": 130,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 68,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 170,
            "month": "November"
          }
        ]
      },
      {
        "name": "Franz Kafka",
        "purchases": [
          {
            "value": 190,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 323,
            "month": "October"
          },
          {
            "value": 38,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 87,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "Edgar Allan Poe",
        "purchases": [
          {
            "value": 120,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 65,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 98,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 257,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "Boris Pasternak",
        "purchases": [
          {
            "value": 120,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 38,
            "month": "October"
          },
          {
            "value": 285,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 97,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "John Lindqvist",
        "purchases": [
          {
            "value": 237,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 207,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 95,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "Jane Austen",
        "purchases": [
          {
            "value": 129,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 231,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 179,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "Mark Z. Danielewski",
        "purchases": [
          {
            "value": 135,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 193,
            "month": "October"
          },
          {
            "value": 38,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 93,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "Emile Zola",
        "purchases": [
          {
            "value": 120,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 13,
            "month": "October"
          },
          {
            "value": 38,
            "month": "October"
          },
          {
            "value": 185,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 10,
            "month": "Novemer"
          },
          {
            "value": 300,
            "month": "November"
          }
        ]
      },
      {
        "name": "Phillip Pullman",
        "purchases": [
          {
            "value": 120,
            "month": "September"
          },
          {
            "value": 7,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 38,
            "month": "October"
          },
          {
            "value": 85,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 30,
            "month": "November"
          }
        ]
      },
      {
        "name": "Gustave Flaubert",
        "purchases": [
          {
            "value": 130,
            "month": "September"
          },
          {
            "value": 207,
            "month": "September"
          },
          {
            "value": 75,
            "month": "September"
          },
          {
            "value": 35,
            "month": "September"
          },
          {
            "value": 123,
            "month": "October"
          },
          {
            "value": 38,
            "month": "October"
          },
          {
            "value": 125,
            "month": "October"
          },
          {
            "value": 135,
            "month": "October"
          },
          {
            "value": 65,
            "month": "November"
          },
          {
            "value": 80,
            "month": "November"
          },
          {
            "value": 150,
            "month": "Novemer"
          },
          {
            "value": 500,
            "month": "November"
          }
        ]
      }
    ]
