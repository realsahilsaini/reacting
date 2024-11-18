import React, { useState, useEffect } from 'react'

const UseIsOnline = () => {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(()=>{

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    //Here we are adding event listeners to the window object to listen for online and offline events i.e. when you go offline it'll run handleOffline function and when you go online it'll run handleOnline function
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }

  }, [isOnline])


  useEffect(() => {
    if (isOnline) {
      console.log('You are back online!');
      // Perform actions like syncing data
    } else {
      console.log('You are offline. Changes will be saved locally.');
      // Save data locally or notify the user
    }
  }, [isOnline]);


  return isOnline;
}

export default UseIsOnline;


/*
How It Works
Initialize State:

The hook starts by initializing the isOnline state with the value of navigator.onLine.
Set Up Event Listeners:

Inside the useEffect, it adds event listeners for online and offline events to track changes in network status.
Update State on Event:

When the online event fires, the handleOnline function sets isOnline to true.
When the offline event fires, the handleOffline function sets isOnline to false.
Cleanup:

The cleanup function removes the event listeners when the component using this hook unmounts, avoiding memory leaks.
Return Status:

The hook returns the current value of isOnline, which can be used in the consuming component.


Benefits of useIsOnline
Dynamic Updates:

Reactively responds to changes in online/offline status without requiring manual checks.
Cleaner Code:

Encapsulates all the logic into a reusable hook, avoiding repetitive boilerplate in components.
Network-Aware Applications:

Enables features like notifying users of offline status, caching offline data, or preventing network calls when offline.




Advanced Use Cases
Custom Behavior on Status Change:

Modify the useEffect to perform specific actions (e.g., save offline data, fetch updates when back online):

useEffect(() => {
  if (isOnline) {
    console.log('You are back online!');
    // Perform actions like syncing data
  } else {
    console.log('You are offline. Changes will be saved locally.');
    // Save data locally or notify the user
  }
}, [isOnline]);

Debouncing Status Updates:

To avoid rapid updates (e.g., when the connection is flaky), debounce changes with a timeout.
Combine with Other Hooks:

Use alongside data-fetching hooks like useQuery to disable network calls when offline.



Limitations of useIsOnline
Network Reliability:

navigator.onLine may not always be reliable. For example, it might return true if the device is connected to a network but not actually connected to the internet.
Granularity:

It doesn’t provide information about the quality or speed of the connection, only whether a connection exists.
Browser Support:

While widely supported, some older browsers might not fully support the online and offline events or navigator.onLine.


*/