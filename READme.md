
# Job Portal

<p align="center">
  <b>Milestone 1</b><br>
</p>


Create a job board that pulls the latest job postings from HackerNews. You will use the HackerNews API to pull down a list of post IDs for the latest job posts, fetch metadata for the latest 9, display them, and allow the user to load more.


You can use the GET /jobstories endpoint to get a list of the latest job post IDs, and the GET /item/<POST_ID> endpoint to get the metadata for an individual post.


## API Reference

[Hacker News API](https://github.com/HackerNews/API)

#### Get the latest job post IDs


URL: https://hacker-news.firebaseio.com/v0/jobstories.json


```http
  GET /jobstories
```

#### This API will return only array of IDs

Example response: [30000051,29996298,29992568,29985735,29982031,...]

#### Get the metadata for a single posts


```http
  GET /item/${SinglePostID}.json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of each item to fetch |

#### This API will return only one item on each ID

Example response (with URL):

{
"by": "some-user",
"id": 1234567,
"score": 1,
"time": 1642593662,
"title": "AcmeCo Is Hiring Frontend engineers",
"type": "job",
"url": "https://jobs.lever.co/acmeco/123"
}







## Requirements

[Documentation](https://docs.google.com/document/d/1ZmSmYrStYRzXW6xNdJOfi1GPuttrK7IoQTqVYYtZA78/edit#)

* The latest 9 job postings are displayed along with the company name,
* Company name (and YC(22), if present) is displayed at the top of the card
* The Is hiring... text should be displayed in the centre of the card
* The date (in whichever day/month/year format you'd like) should be displayed at the bottom of the card
* If the job metadata includes a URL, clicking a card should open the URL in a new tab
* If the job metadata does not include a URL, clicking a card should open https://news.ycombinator.com/item?id=<POST_ID> in a new tab
* Clicking **'Load more'** should fetch and display the next 6 job posts
* The post data.title includes both the company name and information on the role as a single string: you will need to parse these to format the card correctly.

### Important

* You should only fetch the metadata for the latest **9** posts on load, and **6** more every time the user presses 'Load more'
* data.title from the GET /item/<POST_ID> endpoint is nearly always in the format COMPANY_NAME [(YC21)] Is hiring.... If you come across other formats (e.g. COMPANY_NAME is looking for) you can choose to either ignore these edge cases or handle them

<p align="center">
  <br><b>Milestone 2</b><br>
</p>


Your PM has asked you to create the most annoying signup form in the world: a form that has 4 fields but on a series of 5 different screens. Your name, email, job role, date of birth, and password will be entered separately into the site:

#### The specs are as follows:

* Back links appear on every screen other than the first one, going back to the step the user was just on
* Input is required on every screen prior to proceeding to the next.
* On the last screen, provide a submit button that calls a handleSubmit({ name: ..., email: ..., password: ... }) function passing in the values of all the fields
* Show a success screen

## Bonus

**Connect the data from Milestone 1 and Milestone 2**

* Save the profile information in the browser memory.
* Any job post that has the keywords matching the job role in the profile should have a ‘star’ icon next to the job post.
* For example, if the user enters ‘React’ in his job role, then any react-related post should be displayed like:









![App Screenshot](https://i.ibb.co/ydVFgcF/Screen-Shot-2022-08-16-at-1-40-05-PM.png)

