'use client';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function getLottoLastNumber() {
    try {
        const response = await axios.get('http://localhost:8000/lottos/last');
        return response.data;
    } catch (error) {
        console.error('Error fetching lotto data:', error);
        return null;
    }
}
