"use client";

import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../shared/hooks/redux'

import { decrement, increment } from '../../store/reducers/counterSlice'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
<div>
    <h1>{count}</h1>
    <button onClick={() => dispatch(increment(10))}>INCREMENT</button>
</div>
  );
}