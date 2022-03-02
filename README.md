# National Parks React Frontend App

A simple React web application instrumented to produce Real User Monitoring (RUM) telemetry that is sent to Splunk Observability.

This frontend application utilizes the National Parks REST backend found in this repo: [https://github.com/billmeyer/nationalparks-rest]()

To follow along, this application has been documented as an article on Pusher blog. You can read about it [here](https://pusher.com/tutorials/consume-restful-api-react)

## Setup

1. To set up this project, first clone the repository

    ```bash
    $ git clone https://github.com/billmeyer/nationalparks-react.git
    ```

2. Change your working directory into the project directory

    ```bash
    $ cd nationalparks-react
    ```
   
## Run

1. Install Node.js modules

    ```bash
    $ npm install
    ```

2. Start the development server

    ```bash
    $ npm start
    ```

## Evaluate

> **Note:** The links in this section use a Splunk Observability realm of `us1`.  If your realm is different, simply replace `us1` with your specific realm.

Starting the development server will automatically open browser session to [http://localhost:3000]().  The application will query the National Parks REST backend for a random series of National Parks to retrieve from the database.
