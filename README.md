# OSPIN Code Challenge

We are excited to be taking the next steps with you as a candidate! Our team has a straight forward code challenge for you to complete. We value your time, and while you are free to spend as much time on the challenge as you wish, we expect it to be completable _within three hours_. This challenge is not-timed, and we will consider your solution independent of however long it took to complete. If you need more than 5 days in total to complete the code challenge, please let us know so that we can plan accordingly.

---
## Overview
The year is 2042 and OSPIN's spin-off company, **O**rgan **S**pare **P**arts **IN**dustries, is a successful global business selling lab grown replacement organs for humans. Heart getting a little sluggish? No problem! Simply buy a new one through the online organ webshop and voilà - you are back in action before you know it. As convenient as it is dystopian!

As a part of a larger promotion, your team has been tasked with creating a rebate system to encourage sales. The head of marketing had the revolutionary idea that, whenever a customer purchases a certain amount of a specific type of organ, they are eligible to receive additional free organ(s)! For example, the promotion scheme could be structured as follows:

| organs (N) purchased | free organ(s) received|
|----------------------|-----------------------|
| heart x3             | heart x1              |
| liver x2             | lung  x1              |
| lung  x4             | liver x1, heart x1    |

Important to note - any free organs earned through the rebate scheme _can not be used to redeem additional free organs_. Using the rebate structure above, if one were to purchase 9 hearts, they would receive 3 free hearts in addition (woohoo!) but would be unable to use those 3 bonus hearts to redeem an additional heart!

Your part in this is to make an application which, when run, processes customer orders and outputs clear information regarding the total number of products the customer is to receive. As the OSPIN sales team would like to use varying promotion schemes, they need a system that is flexible to change.

Your application will be expected to read orders from csv files provided by the sales team. Each line in the CSV will represent a single order. These orders will include a `bonus_ratio`, which servers as the actual ratio at which free products will be awarded for a given order. In other words, the `bonus_ratio` is the `(N)` value in the table above:

##### Example Order Input
```
// input/orders_a.csv
organ,cash,price,bonus_ratio
"liver",10,5,2
"heart",10,3,3
"lung",25,3,4
```

Given the above input, the application would be expected to output the following to STDOUT:

##### Example Order Output
```
// to STDOUT
heart 0, liver 2, lung 1
heart 4, liver 0, lung 0
heart 2, liver 2, lung 8
```

As an explanation, the first order results in 2 livers and 1 lung because the customer has enough cash to purchase 2 livers outright (cash (10) / price (5) = result (2)). Following, they are able to take advantage of the liver => lung rebate as they meet the bonus_ratio criteria of 2:1 (purchased (2) / bonus_ratio (2) = bonuses (1)). If they had provided enough cash to purchase 4 livers, then they would have then been eligible to receive 2 bonuses (i.e. 2 lungs!).

Notes:
- Each order is separate and does not effect other orders
- Each order will only include a single organ type being purchased
- `cash`, `price`, `bonus_ratio` will always be whole numbers
- a sample input file has been provided to get you started

---
## Assessment Criteria

We are assessing the code challenge solution based on the following:
- Code quality (readability, simplicity, maintainability, separation of concerns)
- Extensible and comprehensive unit/acceptance tests
- Use of design patterns and language specific standards


We are _not_ assessing the code challenge for scaling performance! After all, its the year 2042 and performance problems are now just a bad memory of the 2020s! However, our marketing department plans to use this feature actively, so we expect this feature to be production-ready. Just imagine that you'll have to support it until 2062. 

Please provide a README in your submission which describes your solution, reasons for design decisions taken, and how we can run your program + tests!

---
## FAQ

**Q**: What do I do once I am finished?  
**A**: **Please do not make a PR to the repo and do not fork this repo.** If you are able to host your solution on a GitHub account simply provide a link and it will be cloned. If you made your repo private, please invite GitHub user `ospin-webapp` as a collaborator, let us know when you are finished, and it will be cloned. Please use a generic repo title that will not be associated with this repository. This is to ensure your repository cannot be linked to this code challenge, and that others can not see your solution. As an alternative to hosting your solution on GitHub, you can also send an email to webdev.ospin@gmail.com either with your finished repo zipped and attached, or with a link to somewhere it can be downloaded.

**Q:** May I use dependencies not currently listed?  
**A:** Please do not use external libraries/frameworks/packages with the exception of the following: testing libraries, a CSV library, linting libraries

**Q:** How should the results be shown?  
**A:** Please write the results to STDOUT in the format provided above in the 'Example Order Output'

**Q:** Will you be reviewing Git history?  
**A:** Yes! Please provide a structured and readable Git history. This should mimic a real feature + PR completion, and will be read as such.

**Q:** How much test coverage do I need to provide?  
**A:** Use your best judgement depending on your time constraints. If it is a choice between 20 tests which cover 50% of the feature, vs. 5 tests which cover 95% of the feature, go for the higher coverage!

**Q:** What if I have additional questions about the feature?  
**A:** First and foremost, if it is not blocking to your completion of the code challenge, feel free to list any assumptions you need to make in the discussion section of your README. Otherwise, reach out directly if you have any questions that feel are blocking to the completion of this code challenge.

> Any and all feedback on the code challenge is greatly appreciated. Please let us know if it could be improved, if it was too long, if expectations weren't clear, etc.!
