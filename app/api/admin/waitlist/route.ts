import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const ADMIN_PASSWORD = 'crowdia2025';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('x-admin-password');

  if (authHeader !== ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch data' },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
