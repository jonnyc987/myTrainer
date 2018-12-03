
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('personalTrainers').del()
    .then(function () {
      // Inserts seed entries
      return knex('personalTrainers').insert([
        {id: 1, email: 'jonnyc@gmail.com', password: '12345', firstName: 'Jonny', lastName: 'Caron', gender: 'male', 
        city: 'Vancouver', gym: 1, bio: 'This is Jonny Carons bio', trainingDays: 'Thursday-Sunday', 
        trainingTime: '5:00pm-8:00pm', trainingGoals: 'Build Muscle', trainingMotivation: 'high', trainingMonths: '>1 year', 
        trainerImage: 'https://media.licdn.com/dms/image/C4E03AQHGsUVXaaOI4A/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=OFdYmjgXpn-D3Pbs77pGOkHY0KCKaPZJkLuzAzHH0Oo'},


        {id: 2, email: 'treyes@gmail.com', password: '12345', firstName: 'Tomy', lastName: 'Reyes', gender: 'male', 
        city: 'Vancouver', gym: 1, bio: 'This is Tomy Reyes bio', trainingDays: 'Monday-Sunday', 
        trainingTime: '6:30pm-8:00pm', trainingGoals: 'Tone Muscle', trainingMotivation: 'high', trainingMonths: '>1 year', 
        trainerImage: 'https://media.licdn.com/dms/image/C5603AQEFrQc-ccZJrw/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=bAg7OW3W0teLYdB2VHSG3zNvxzp5zxxNRRED0Hvt6SY'},


        {id: 3, email: 'twernke@gmail.com', password: '12345', firstName: 'Tim', lastName: 'Wernke', gender: 'male', 
        city: 'Vancouver', gym: 1, bio: 'This is Tim Wernkes bio', trainingDays: 'Wednesday-Saturday', 
        trainingTime: '5:00pm-8:00pm', trainingGoals: 'Build Muscle', trainingMotivation: 'high', trainingMonths: '>6-9 months', 
        trainerImage: 'https://media.licdn.com/dms/image/C5603AQExQhn3ptEUaA/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=YMn1nDdDx6BrNhQmMQcBxL5HdHXkfrw4bniXhUAX4iI'},


        {id: 4, email: 'jbluks@gmail.com', password: '12345', firstName: 'Jonathan', lastName: 'Bluks', gender: 'male', 
        city: 'Vancouver', gym: 2, bio: 'This is Jonathan Bluks bio', trainingDays: 'Monday-Friday', 
        trainingTime: '7:00pm-9:00pm', trainingGoals: 'Lose Weight', trainingMotivation: 'medium', trainingMonths: '1-3 months', 
        trainerImage: 'https://media.licdn.com/dms/image/C4D03AQGZ3JmMlMZeQg/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=wHSeoKsFDfQ3myKPcssgEofE67kbSKpv7_5GV_7ixjc'},


        {id: 5, email: 'tprosser@gmail.com', password: '12345', firstName: 'Teddy', lastName: 'Prosser', gender: 'male', 
        city: 'Vancouver', gym: 2, bio: 'This is Teddy Prossers bio', trainingDays: 'Thursday-Saturday', 
        trainingTime: '10:00am-8:00pm', trainingGoals: 'Build Muscle', trainingMotivation: 'high', trainingMonths: '10 months-1 year', 
        trainerImage: 'https://media.licdn.com/dms/image/C5603AQGlaUcPfejD7w/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=xCtXVdHH5pGTTXBbnfpV_pmLXVzM7iT4oojB9kkEWYQ'},


        {id: 6, email: 'ssujitno@gmail.com', password: '12345', firstName: 'Stan', lastName: 'Sujitno', gender: 'male', 
        city: 'Vancouver', gym: 2, bio: 'This is Stan Sujitnos bio', trainingDays: 'Monday-Thursday', 
        trainingTime: '5:00pm-8:00pm', trainingGoals: 'Build Muscle', trainingMotivation: 'high', trainingMonths: '1-3 months', 
        trainerImage: 'https://media.licdn.com/dms/image/C5603AQG9GSpmZN33aQ/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=V3qFg3YebVof61eXwvd29YQhXjMguYqZfo3zcYwYeJU'},


        {id: 7, email: 'bmacdonald@gmail.com', password: '12345', firstName: 'Brad', lastName: 'MacDonald', gender: 'male', 
        city: 'Vancouver', gym: 3, bio: 'This is Brad MacDonalds bio', trainingDays: 'Thursday-Friday', 
        trainingTime: '8:00pm-10:00pm', trainingGoals: 'Lose Weight', trainingMotivation: 'high', trainingMonths: '>3-6 months', 
        trainerImage: 'https://media.licdn.com/dms/image/C4E03AQHGsUVXaaOI4A/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=OFdYmjgXpn-D3Pbs77pGOkHY0KCKaPZJkLuzAzHH0Oo'},


        {id: 8, email: 'kma@gmail.com', password: '12345', firstName: 'Kary', lastName: 'Ma', gender: 'male', 
        city: 'Vancouver', gym: 3, bio: 'This is Kary Mas bio', trainingDays: 'Tuesday-Sunday', 
        trainingTime: '5:00pm-8:00pm', trainingGoals: 'Tone Muscle', trainingMotivation: 'high', trainingMonths: '>10 months-1 year', 
        trainerImage: 'https://media.licdn.com/dms/image/C5603AQGmwtLtZpi-jQ/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=YGH2wd1Urb3rEZkfJ1ISZ7t_CWuRTcDCcwunZ6CXHxQ'},


        {id: 9, email: 'wjae@gmail.com', password: '12345', firstName: 'Master', lastName: 'Wooj', gender: 'male', 
        city: 'Vancouver', gym: 3, bio: 'This is Master Woojs bio', trainingDays: 'Friday', 
        trainingTime: '5:00pm-8:00pm', trainingGoals: 'Tone Muscle', trainingMotivation: 'high', trainingMonths: '>1 year', 
        trainerImage: 'https://media.licdn.com/dms/image/C5603AQGkpmlGVZGAYQ/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=ZHcKRKwXPy9mE6dxwEQBQwYSwcEdFoBEGgbGpCukcww'},


        {id: 10, email: 'awong@gmail.com', password: '12345', firstName: 'Anothony', lastName: 'Wong', gender: 'male', 
        city: 'Vancouver', gym: 4, bio: 'This is Anthony Wongs bio', trainingDays: 'Saturday-Sunday', 
        trainingTime: '5:00am-8:00am', trainingGoals: 'Lose Weight', trainingMotivation: 'high', trainingMonths: '>1 year', 
        trainerImage: 'https://media.licdn.com/dms/image/C5603AQHipjijGs5CKA/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=MX5KuAG8eZR3cmavycH1Cb2ZyJGIRBf1vPJG38ZmvlU'},
      ]);
    });
};
