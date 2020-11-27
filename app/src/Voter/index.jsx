import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Voter = ({ id }) => {
  const [appState, setAppState] = useState({
    loading: false,
    item: null,
  });

  useEffect(() => {
    setAppState({
      loading: true,
    });

    const fetchItem = async () => {
      const response = await axios({
        method: 'get',
        url: `/votes/${id}`,
      });

      setAppState({
        item: response.data,
        loading: false,
      });
    }

    fetchItem();
  }, [setAppState]);

  const upvote = useCallback(async () => {
    const response = await axios({
      method: 'post',
      url: `/votes/${id}/up`,
    });

    setAppState({
      item: response.data,
    });
  }, [setAppState]);

  const downvote = useCallback(async () => {
    const response = await axios({
      method: 'post',
      url: `/votes/${id}/down`,
    });

    setAppState({
      item: response.data,
    });
  }, [setAppState]);

  if (appState.loading) {
    return (<div>Loading...</div>);
  }

  if (!appState.item) {
    return (<div>No item found</div>);
  }

  return (
    <div>
      <p>Id: {appState.item.id} ({appState.item._id})</p>
      <p>Upvotes: {appState.item.upvotes} <button onClick={upvote}>up</button></p>
      <p>Downvotes: {appState.item.downvotes} <button onClick={downvote}>down</button></p>
    </div>
  )
};

export default Voter;
